const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "black";
ctx.lineWidth = 2.5;

let painting = false;

function onMouseMove(event) {
  const X = event.offsetX;
  const Y = event.offsetY;

  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(X, Y);
  } else {
    ctx.lineTo(X, Y);
    ctx.stroke();
  }
}

function startPainting(event) {
  painting = true;
}

function stopPainting(event) {
  painting = false;
}

function handleColor(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColor)
);
