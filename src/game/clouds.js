class Clouds {
  constructor(image, speed) {
    this.image = image;
    this.speed = speed;
    this.x1 = 0;
    this.x2 = width;
  }

  show() {
    image(this.image, this.x1, 0, width, height / 2);
    image(this.image, this.x2, 0, width, height / 2);
  }

  move() {
    this.x1 -= this.speed;
    this.x2 -= this.speed;

    if (this.x1 < -width) {
      this.x1 = width - this.speed;
    }

    if (this.x2 < -width) {
      this.x2 = width - this.speed;
    }
  }
}
