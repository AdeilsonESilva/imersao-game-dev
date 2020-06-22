let imageScenario;
let imageCharacter;
let scenario;
let soundGame;
let character;

function preload() {
  imageScenario = loadImage('assets/images/floresta.png');
  imageCharacter = loadImage('assets/images/correndo.png');
  soundGame = loadSound('assets/sounds/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imageScenario, 3);
  character = new Character(imageCharacter);
  frameRate(40);
  // soundGame.play();
  // soundGame.loop();
}

function draw() {
  // background(imageScreen);
  scenario.show();
  scenario.move();

  character.show();
}
