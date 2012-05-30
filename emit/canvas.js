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

var draw = (function () {
  var T = 100;
  var r = W > H ? W : H;

  return function() {
    // reset
    ctx.fillStyle = "rgba(0, 0, 0, 1)";
    ctx.fillRect(0, 0, W, H);
    ctx.save();

    ctx.translate(W/2, H/2);

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

    ctx.restore();
  }
})();
