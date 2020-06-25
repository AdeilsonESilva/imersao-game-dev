let imageScenario;
let imageClouds;
let imageCharacter;
let imageEnemy;
let imageBee;
let imageGameOver;
let scenario;
let soundGame;
let soundJump;
let character;
let enemy;
let bee;
let gameOver;

function preload() {
  imageScenario = loadImage('assets/images/floresta.png');
  imageClouds = loadImage('assets/images/nuvens.png');
  imageCharacter = loadImage('assets/images/correndo.png');
  imageEnemy = loadImage('assets/images/gotinha.png');
  imageBee = loadImage('assets/images/bee.png');
  imageGameOver = loadImage('assets/images/game-over.png');
  soundGame = loadSound('assets/sounds/trilha_jogo.mp3');
  soundJump = loadSound('assets/sounds/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  scenario = new Scenario(imageScenario, 3);
  clouds = new Clouds(imageClouds, 12);
  enemy = new Enemy(7, 4, imageEnemy, width - 52, 52, 52, 104, 104);
  bee = new Bee(1, 2, imageBee, 0, 100, 65, 496, 321, 500);
  character = new Character(4, 4, imageCharacter, 0, 110, 135, 220, 270);
  gameOver = new GameOver(imageGameOver);

  soundGame.loop();

  frameRate(40);
}

function keyPressed() {
  if (key === 'ArrowUp') {
    character.jump();
    soundJump.play();
  }
}

function draw() {
  // background(imageScreen);
  scenario.show();
  scenario.move();
  clouds.show();
  clouds.move();

  character.show();
  character.applyGravity();

  enemy.show();
  enemy.move();

  bee.show();
  bee.move();

  if (character.isColliding(enemy)) {
    noLoop();
    soundGame.stop();
    gameOver.show();
  }
}
