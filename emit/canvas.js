var canvas, ctx;
var W = window.innerWidth;
var H = window.innerHeight;
onload = function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  setInterval(draw, 100);
};

Array.prototype.sample = function () {
  return this[Math.floor(Math.random()*this.length)];
};

var draw = (function () {
  var T = 100;
  var r = W > H ? 2*W : 2*H;
  var center = {x: W/2, y: H/2, dx: 10, dy: 10};

  return function() {
    // reset
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0, 0, W, H);
    ctx.save();

    ctx.translate(center.x, center.y);
    center.x += center.dx;
    center.y += center.dy;

    if (!(0 < center.x && center.x < W))
      center.dx *= -1;
    if (!(0 < center.y && center.y < H))
      center.dy *= -1;

    for (i = 0; i < T; i++) {
      ctx.fillStyle = "rgba(" + [null,null,null].map(function(){return Math.floor(255*Math.random())}).join(',') + ",1.0)";
      ctx.strokeStyle = ctx.fillStyle;
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.lineTo(r,0);
      ctx.rotate(2 * Math.PI / T);
      ctx.lineTo(r,0);
      ctx.fill();
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,255,0,0.7)';
    ctx.arc(0,0,10,0,2*Math.PI,false);
    ctx.fill();
    ctx.closePath();
    

    ctx.restore();
  }
})();
