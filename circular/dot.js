var Dot = function(context, x, y, universeCenter) {
  this.x = x;
  this.y = y;
  this.ctx = context;
  this.universeCenter = universeCenter;
  this.distance = Math.abs(x - universeCenter.x); // assumes y is 0!
  this.step = 3; // distance to move per animation frame
  this.angle = x > universeCenter.x ? 0 : Math.PI
  this.calculateAngle();
};

Dot.prototype.constructor = Dot;

// calculates and sets the angle, which depends on the
// dot distance from the universeCenter so it can move
// in a circle every animation frame
Dot.prototype.calculateAngle = function(){
  var cosA = 1 - Math.pow( this.step / (2 * this.distance), 2);
  this.angleStep = Math.acos(cosA);
}

Dot.prototype.draw = function() {
  this.ctx.shadowBlur    = 2;
  this.ctx.shadowColor   = 'rgba(255, 255, 255, 0.7)';
  this.ctx.fillStyle = 'rgba(226,219,226,0.7)';

  // Draw circle
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, 1.0, 0.0 + Math.PI * 2.0, 0.0 + Math.PI * 0.0, true); 

  this.ctx.closePath();
  this.ctx.fill();
};

Dot.prototype.applyVelocity = function() {
  this.angle += this.angleStep;
  this.x = this.distance * Math.cos(this.angle) + this.universeCenter.x;
  this.y = this.distance * Math.sin(this.angle) + this.universeCenter.y;
};