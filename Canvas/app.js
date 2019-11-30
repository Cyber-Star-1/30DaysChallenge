const canvas = document.getElementById(`draw`);
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = `#BADA55`;
ctx.lineJoin = `round`;
ctx.lineCap = `round`;
ctx.lineWidth = 20;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
ctx.globalCompositeOperation = `none`
ctx.fillStyle = `blue`

// ctx.fillRect(10,10,100,100)
// ctx.fillStyle = `red`
// ctx.fillRect(50,50,100,100)
// ctx.fillStyle = `green`
// ctx.fillRect(90,90,100,100)
// ctx.fillStyle = `yellow`
// ctx.fillRect(130,130,100,100)
// ctx.fillStyle = `purple`
// ctx.fillRect(170,170,100,100)
// ctx.fillStyle = `cyan`
// ctx.fillRect(210,210,100,100)
// ctx.fillStyle = `brown`
// ctx.fillRect(250,250,100,100)
// ctx.fillStyle = `orange`
// ctx.fillRect(290,290,100,100)
// ctx.fillStyle = `#f0f`
// ctx.fillRect(330,330,100,100)
// ctx.fillStyle = `#f90`
// ctx.fillRect(370,370,100,100)
// ctx.fillStyle = `#07f077`
// ctx.fillRect(410,410,100,100)
const draw = e => {
  ctx.globalCompositeOperation = `none`
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  // ctx.lineWidth--
  hue++;
  if (hue >= 360) hue = 0;
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if(direction) {
      ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
};
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", e => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
aler