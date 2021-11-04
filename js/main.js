const game = new Game();
let song;
let player;
let poles = [];
let score = 0;
let playerImage, poleImage, plumImage, backgroundImages;
// determine if game has started

function preload() {
  game.preload();
}

function setup() {

  createCanvas(600, 600);
  game.setup();
  soundFormats("mp3");
}

function draw() {

    game.draw();
}

function keyPressed() {

  if (keyCode === 32 && game.alive) {
    game.player.jump();
  } else {
    game.reset();
  }
}
