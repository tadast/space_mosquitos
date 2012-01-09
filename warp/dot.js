var Dot = function(canvas) {
  this.center = { x : canvas.width * 0.5, y : canvas.height * 0.5 };
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * canvas.height;
  this.ctx = canvas.getContext('2d');

  var thatLongThing = Math.sqrt(Math.pow(this.y - this.center.y, 2) + Math.pow(this.x - this.center.x, 2));
  this.cos = (this.y - this.center.y) / thatLongThing;
  this.sin = (this.x - this.center.x) / thatLongThing;
  this.maxWidth = 5.0;
  this.maxSpeed = 30;
};

Dot.prototype.constructor = Dot;

Dot.prototype.draw = function() {
  this.ctx.shadowBlur    = 2;
  this.ctx.shadowColor   = 'rgba(255, 255, 255, 0.7)';
  this.ctx.fillStyle = 'rgba(226,219,226,0.7)';

  // Draw circle
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, this.width(), 0.0 + Math.PI * 2.0, 0.0 + Math.PI * 0.0, true); 

  this.ctx.closePath();
  this.ctx.fill();
};

Dot.prototype.applyVelocity = function() {
  if (Math.abs(this.x - this.center.x) > this.center.x || Math.abs(this.y - this.center.y) > this.center.y) {
    this.x = this.center.x;
    this.y = this.center.y;
  };
  var speed = this.speed() + 1; 
  this.x += speed * this.sin;
  this.y += speed * this.cos;
};

Dot.prototype.width = function() {
  return this.distanceFraction() * this.maxWidth;
};

Dot.prototype.speed = function() {
  return this.distanceFraction() * this.maxSpeed;
};

Dot.prototype.distanceFraction = function() {
  return (  Math.abs(this.x - this.center.x) 
          + Math.abs(this.y - this.center.y)
          ) / (this.center.x + this.center.y);
};
