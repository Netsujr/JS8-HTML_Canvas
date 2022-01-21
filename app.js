const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(event) {
  if(!isDrawing) return; //if not drawing, dont log mouse movement
  console.log(event);
  ctx.beginPath();
  //start from here
  ctx.moveTo(lastX, lastY);
  //goes to here
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  // lastX = event.offsetX;
  // lastY = event.offsetY;
  [lastX, lastY] = [event.offsetX, event.offsetY];
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
