class Bee extends AnimationCharacter {
  constructor(
    imageLines,
    imageColumns,
    image,
    imageX,
    dWidth,
    dHeight,
    widthSprite,
    heightSprite,
    imageY
  ) {
    super(
      imageLines,
      imageColumns,
      image,
      imageX,
      dWidth,
      dHeight,
      widthSprite,
      heightSprite,
      imageY
    );

    this.speed = 5;
  }

  move() {
    this.imageX = this.imageX < -this.dWidth ? width : this.imageX - this.speed;
  }
}
