class GameOver {
  constructor(image) {
    this.image = image;
  }

  show() {
    image(this.image, width / 2 - 206, height / 2 - 39, 412, 78);
  }
}
