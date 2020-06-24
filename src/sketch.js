let imageScenario;
let imageCharacter;
let imageEnemy;
let scenario;
let soundGame;
let soundJump;
let character;
let enemy;

function preload() {
  imageScenario = loadImage('assets/images/floresta.png');
  imageCharacter = loadImage('assets/images/correndo.png');
  imageEnemy = loadImage('assets/images/gotinha.png');
  soundGame = loadSound('assets/sounds/trilha_jogo.mp3');
  soundJump = loadSound('assets/sounds/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  scenario = new Scenario(imageScenario, 3);
  enemy = new Enemy(7, 4, imageEnemy, width - 52, 52, 52, 104, 104);
  character = new Character(4, 4, imageCharacter, 0, 110, 135, 220, 270);

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

  character.show();
  character.applyGravity();

  enemy.show();
  enemy.move();

  if (character.isColliding(enemy)) {
    noLoop();
    soundGame.stop();
  }
}
