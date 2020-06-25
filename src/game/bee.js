class Bee extends AnimationCharacter {
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
    super(
      imageLines,
      imageColumns,
      image,
      imageX,
      variationY,
      dWidth,
      dHeight,
      widthSprite,
      heightSprite
    );

    this.speed = 5;
  }

  move() {
    this.imageX = this.imageX < -this.dWidth ? width : this.imageX - this.speed;
  }
}
