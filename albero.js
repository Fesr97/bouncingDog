
class Albero {
  x = 800;
  y = 0;
  w = 60;   
  h = 300;

  compute() {
    this.x -= this.speed;
    /*if (score >= 20) {
      this.speed -= this.acceleration;
    }*/
  }
  speed = 4;
  acceleration = 200;
  image = image;
  solid = true;
  constructor(down) {
    this.y = Math.random() * 200 - 250;
  }
}
const image = new Image();
image.src = "./alberone.PNG";

export { Albero };

