var Dot = function(context, layer, row, col, vStep, hStep) {
  this.x = Math.random() * vStep + vStep * col;
  this.y = Math.random() * hStep + hStep * row;
  this.layer = layer;
  this.ctx = context;
  this.fillColour = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`
};

Dot.prototype.constructor = Dot;

Dot.prototype.draw = function() {
  this.ctx.shadowBlur = 2;
  // this.ctx.shadowColor = 'rgba(255, 255, 255, 0.7)';
  this.ctx.fillStyle = this.fillColour;

  // Draw circle
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, 0.6 * this.layer, 0.0 + Math.PI * 2.0, 0.0 + Math.PI * 0.0, true);

  this.ctx.closePath();
  this.ctx.fill();
};

Dot.prototype.applyVelocity = function() {
  var multiplyer = 2.0 * this.layer;
  this.x += multiplyer * (Math.random() - 0.5);
  this.y += multiplyer * (Math.random() - 0.5);
};