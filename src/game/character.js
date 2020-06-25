class Character extends AnimationCharacter {
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

    this.variationY = variationY;

    this.initialY = height - this.dHeight - this.variationY;
    this.imageY = this.initialY;

    this.gravity = 3;
    this.jumpSpeed = 0;
    this.maxJump = 2;
    this.qtyJumps = 0;
  }

  jump() {
    if (this.qtyJumps >= this.maxJump) {
      return;
    }

    this.jumpSpeed = -50;
    this.qtyJumps += 1;
  }

  applyGravity() {
    this.imageY = this.imageY + this.jumpSpeed;
    this.jumpSpeed = this.jumpSpeed + this.gravity;

    if (this.imageY > this.initialY) {
      this.imageY = this.initialY;

      this.qtyJumps = 0;
    }
  }

  isColliding(enemy) {
    // noFill();
    // rect(this.imageX, this.imageY, this.dWidth, this.dHeight);
    // rect(enemy.imageX, enemy.imageY, enemy.dWidth, enemy.dHeight);

    const precision = 0.7;

    const collision = collideRectRect(
      this.imageX,
      this.imageY,
      this.dWidth * precision,
      this.dHeight * precision,
      enemy.imageX,
      enemy.imageY,
      enemy.dWidth * precision,
      enemy.dHeight * precision
    );

    return collision;
  }
}
