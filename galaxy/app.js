var Scene = function() {
  this.canvas = document.createElement('canvas');
  this.canvas.width = window.innerWidth;
  this.canvas.height = window.innerHeight;
  document.body.appendChild(this.canvas);

  this.dotsCount = 100;
  this.dots = [];

  this.ctx = this.canvas.getContext('2d');
  this.paintBg();
  // this.initiateDots();
};

Scene.prototype.constructor = Scene;

Scene.prototype.paintBg = function() {
  this.ctx.fillStyle = '#070712';
  this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
};

Scene.prototype.initiateDots = function() {
  var center = {x : this.canvas.width * 0.5, y : this.canvas.height * 0.5};
  var radius = Math.min(center.x, center.y);
  var step = radius * 2.0 / (this.dotsCount - 1);
  for (var i=0; i < this.dotsCount; i++) {
    var dot = new Dot(this.ctx,
                      center.x - radius + step * i, // dot x
                      center.y,                     // dot y
                      center)
    this.dots.push( dot );
  }
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
  this.paintBg();
  this.drawDots(true);
};

