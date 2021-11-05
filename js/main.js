const game = new Game();
let song;
let player;
let poles = [];
let drones = [];
let score = 0;
let playerImage, poleImage, plumImage, backgroundImages, startScreenImage, droneImage;
let myFont;

function preload() {
  myFont = loadFont("assets/font/PPMondwest-Regular.otf");
  game.preload();
}

function setup() {
  createCanvas(600, 600);
  game.setup();
  soundFormats("mp3");

  textFont(myFont);
  fill('#FFFFFF');
  textSize(36);
  text("p5*js", 10, 50);
}

function draw() {
  game.draw();
}

function startGame() {
  game.gameStart = true;
}

function keyPressed() {
  if (keyCode === 13) {
    game.gameStart = true;
  }

  if (keyCode === 32 && game.alive) {
    game.player.jump();
  } else {
    game.reset();
  }
}
