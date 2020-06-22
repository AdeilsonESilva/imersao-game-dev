class Character {
  constructor(image) {
    this.imageLines = 4;
    this.imageColumns = 4;
    this.imageWidth = 220;
    this.imageHeight = 270;
    this.image = image;
    this.matrix = this.itemsArray();
    this.currentFrame = 0;
    this.imageX = 0;
    this.imageY = height - this.imageHeight / 2;
    this.dWidth = this.imageWidth / 2;
    this.dHeight = this.imageHeight / 2;
    this.subsectionWidth = this.imageWidth;
    this.subsectionHeight = this.imageHeight;
  }

  itemsArray() {
    const arr = [];

    for (let i = 0; i < this.imageLines; i++) {
      for (let j = 0; j < this.imageColumns; j++) {
        arr.push([j * this.imageWidth, i * this.imageHeight]);
      }
    }

    return arr;
  }

  show() {
    const subsectionX = this.matrix[this.currentFrame][0];
    const subsectionY = this.matrix[this.currentFrame][1];

    image(
      this.image,
      this.imageX,
      this.imageY,
      this.dWidth,
      this.dHeight,
      subsectionX,
      subsectionY,
      this.subsectionWidth,
      this.subsectionHeight
    );
    this.animate();
  }

  animate() {
    this.currentFrame =
      this.currentFrame < this.matrix.length - 1 ? this.currentFrame + 1 : 0;
  }
}
