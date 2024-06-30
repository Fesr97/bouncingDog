/*
-creare un canvas
canvas: elemento HTML <canvas></canvas> è un metodo per creare un output grafico
*/

import { Albero } from "./albero.js";
import { Terrain } from "./terrain.js";
import { Cane } from "./cane.js";
import { isCollided } from "./isCollided.js";
import { coinFlip } from "./moneta.js";
import { spawnTrees } from "./spawnTrees.js";

let canvas = document.createElement("canvas");
let context = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.style.position = "absolute";
canvas.style.left = "0";
canvas.style.top = "0";
canvas.height = 520;
canvas.width = 800;
const cane = new Cane();
let score = 0;
function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
let entities = [cane, new Terrain(), new Terrain(true)];

function scoreText() {
  context.fillText("score " + score, 50, 100, 2000);
  context.font = "40px Verdana";
}

function despawn(index) {
  if (entities[index].x < -entities[index].w) {
    entities.splice(index, 1);
    score += 5;
  }
}


function loop() {
  context.fillStyle = "red";

  clear();

  
  for (let i = entities.length - 1; i >= 0; i--) {
    if (entities[i].solid) {
      if (isCollided(cane, entities[i])) {
        //cane.speed = 0.4;
        location.reload();
      }
    }

    context.drawImage(
      entities[i].image,
      entities[i].x,
      entities[i].y,
      entities[i].w,
      entities[i].h
    );
entities[i].speed = entities[i].speed + score/10000;
    entities[i].compute?.();
    despawn(i);
    scoreText();
  }

  setTimeout(loop, 1000 / 60);
}

function trees() {
  setTimeout(() => {
    spawnTrees(entities), trees();
  }, 1000);
}
trees();
loop();
coinFlip();
