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

window.onload = function() {
  scene = new Scene();
  animate();
};

window.onclick = function() {
  scene.initiateDots();
  clickElm = document.getElementById('click')
  if (clickElm) {
    clickElm.parentNode.removeChild(clickElm);
  };
};
