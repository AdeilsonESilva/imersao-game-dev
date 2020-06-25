class AnimationCharacter {
  constructor(
    imageLines,
    imageColumns,
    image,
    imageX,
    variationY,
    dWidth,
    dHeight,
    widthSprite,
    heightSprite
  ) {
    this.imageLines = imageLines;
    this.imageColumns = imageColumns;
    this.image = image;
    this.imageX = imageX;
    this.variationY = variationY;
    this.imageY = height - heightSprite / 2 - this.variationY;
    this.dWidth = dWidth;
    this.dHeight = dHeight;
    this.widthSprite = widthSprite;
    this.heightSprite = heightSprite;

    this.matrix = this.itemsArray();
    this.currentFrame = 0;
  }

  itemsArray() {
    const arr = [];

    for (let i = 0; i < this.imageLines; i++) {
      for (let j = 0; j < this.imageColumns; j++) {
        arr.push([j * this.widthSprite, i * this.heightSprite]);
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
      this.widthSprite,
      this.heightSprite
    );

    this.animate();
  }

  animate() {
    this.currentFrame =
      this.currentFrame < this.matrix.length - 1 ? this.currentFrame + 1 : 0;
  }
}
