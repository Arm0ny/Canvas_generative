var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var size = window.innerWidth;
var dpr = window.devicePixelRatio;
canvas.height = size * dpr;
canvas.width = size * dpr;
ctx.scale(dpr, dpr);

ctx.lineWidth = 2;

var step = Math.floor(size/16);

function generateHslaColors (saturation, lightness, alpha, amount) {
  let colors = []
  let huedelta = Math.trunc(360 / amount)

  for (let i = 0; i < amount; i++) {
    let hue = i * huedelta
    colors.push(`hsla(${hue},${saturation}%,${lightness}%,${alpha})`)
  }

  return colors
}

function draw(x, y, width, height){
  var leftToRight = Math.random() >= 0.5;

  if (leftToRight) {
    ctx.moveTo(x, y);
    ctx.lineTo(x + width, y + height);
    ctx.stroke();
  }
  else {
    ctx.moveTo(x + width, y);
    ctx.lineTo(x, y + height);
    ctx.stroke();
  }

}

for (var x = 0; x < size; x+= step) {
  for (var y = 0; y < size; y += step) {
    draw(x, y, step, step);
  }
}
