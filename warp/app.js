// shim layer with setTimeout fallback
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function(/* function */ callback, /* DOMElement */ element){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function animate(time) {
  requestAnimFrame(animate);
  scene.draw(time);
};

var Scene = function() {
  this.canvas = document.createElement('canvas');
  this.canvas.width = document.width;
  this.canvas.height = document.height;
  document.body.appendChild(this.canvas);

  this.dotsCount = 100;
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
  var center = {x : this.canvas.width * 0.5, y : this.canvas.height * 0.5};
  for (var i=0; i < this.dotsCount; i++) {
    var dot = new Dot(this.canvas);
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

window.onload = function() {
  scene = new Scene();
  animate();
};

window.onclick = function() {
  scene.initiateDots();
};