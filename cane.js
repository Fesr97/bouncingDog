import { Controls } from "./controlli.js";
class Cane {
  collisions = {
    su:false,
    giu:false,
    sx:false,
    dx:false,
  };
  controls = new Controls();
  x = 100;
  y = 200;
  w = 55;
  h = 50;
  
  image = imageRight;
  speed = 0;
acceleration = 8 ;
  left = false;
  swapImage() {
    if (this.left) {
      this.image = imageLeft;
    } else {
      this.image = imageRight;
    }
  }
  compute() {
  this.collisions.su = false;
  this.collisions.giu = false;
  this.collisions.sx = false;
  this.collisions.dx = false;
    /*if (this.controls.su && !this.collisions.su) {
      this.y -= this.speed;
    }
    if (this.controls.giu&& !this.collisions.giu) {
      this.y += this.speed;
    }
    if (this.controls.sx&& !this.collisions.sx) {
      this.x -= this.speed;
      this.left = true;
    }
    if (this.controls.dx&& !this.collisions.dx) {
      this.left = false;
      this.x += this.speed; 
    }
    this.swapImage();*/
    if (this.controls.jump){
      this.speed = this.acceleration;
      
      this.controls.jump = false 
    };
    this.speed = this.speed - 0.4;
    this.y = this.y-this.speed;
  }
}
const imageLeft = new Image();
const imageRight = new Image();
imageRight.src = "./doggo.PNG";
imageLeft.src = "./doggo mirror.PNG";

export { Cane };
