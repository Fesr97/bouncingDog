class Controls {
  su = false;
  giu = false;
  dx = false;
  sx = false;
  jump = false;

  constructor() {
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "w":
          this.su = true;
          break;
        case "s":
          this.giu = true;
          break;
        case "a":
          this.sx = true;
          break;
        case "d":
          this.dx = true;
          break;
        case " ":
          this.jump = true;
          break;
      }
    });
    document.addEventListener("keyup", (event) => {
      switch (event.key) {
        case "w":
          this.su = false;
          break;
        case "s":
          this.giu = false;
          break;
        case "a":
          this.sx = false;
          break;
        case "d":
          this.dx = false;
          break;

      }
    });
  }
}
export { Controls };
