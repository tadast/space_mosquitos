var Scene = function() {
  this.canvas = document.createElement('canvas');
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  document.body.appendChild(this.canvas);

  this.hDensity = 3.0;
  this.vDensity = 3.0;
  this.vStep = this.canvas.width / this.hDensity;
  this.hStep = this.canvas.height / this.vDensity;
  this.layers = 5;
  this.dots = [];

  this.ctx = this.canvas.getContext('2d');
  this.paintBg();
};

Scene.prototype.constructor = Scene;

Scene.prototype.paintBg = function() {
  this.ctx.fillStyle = '#070712';
  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
};

Scene.prototype.initiateDots = function() {
  for (var l=0; l < this.layers; l++) {
    for (var j=0; j < this.vDensity; j++) {
      for (var k=0; k < this.hDensity; k++) {
        this.dots.push(new Dot(this.ctx, l, j, k, this.vStep, this.hStep));
      };
    };
  };
};

Scene.prototype.drawDots = function(applyVelocity){
  for (var i=0; i < this.dots.length; i++) {
    if (applyVelocity){
      this.dots[i].applyVelocity();
    };
    this.dots[i].draw();
  };
};

Scene.prototype.draw = function(){
  this.drawDots(true);
};
