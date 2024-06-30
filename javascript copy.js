/*
-creare un canvas
canvas: elemento HTML <canvas></canvas> è un metodo per creare un output grafico
*/

let canvas = document.createElement("canvas");
let context = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.style.border = "1px solid black";
canvas.height = 900;
canvas.width = 600;
let cane = {
  x: 1,
  y: 1,
  w: 100,
  h: 50,
  image: new Image(),
  speed: 5,
};
cane.image.src = "./doggo.webp";
let albero = {
  x:80,
  y:80,
  w:250,
  h:250,
  image: new Image(),
  solid:true,
}
albero.image.src = "./alberone.PNG"
function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function loop() {
  context.fillStyle = "red";
  clear();
  context.drawImage(albero.image, albero.x, albero.y,albero.w,albero.h)
  context.drawImage(cane.image, cane.x, cane.y, cane.w, cane.h);
  if (controls.su) {
    cane.y -= cane.speed;
  }
  if (controls.giu) {
    cane.y += cane.speed;
  }
  if (controls.sx) {
    cane.x -= cane.speed;
  }
  if (controls.dx) {
    cane.x += cane.speed;
  }
  
  setTimeout(loop, 1000 / 60);
}

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "w":
      controls.su = true;
      break;
    case "s":
      controls.giu = true;
      break;
    case "a":
      controls.sx = true;
      break;
    case "d":
      controls.dx = true;
      break;
  }
});
document.addEventListener("keyup", function (event) {
  switch (event.key) {
    case "w":
      controls.su = false;
      break;
    case "s":
      controls.giu = false;
      break;
    case "a":
      controls.sx = false;
      break;
    case "d":
      controls.dx = false;
      break;
  }
});
let controls = {
  su: false,
  giu: false,
  dx: false,
  sx: false,
};
loop();
