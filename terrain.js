class Terrain {
  x = 0;
  y = 500;
  w = 800;
  h = 20;

  image = image;
  solid = true;
  constructor(isUp) {
    if (isUp) {
      this.y = 0;
      this.image = imageUp;
    }
  }
}
const image = new Image();
const imageUp = new Image();
image.src = "./floor.PNG";
imageUp.src = "./floorUp.PNG";

export { Terrain };
