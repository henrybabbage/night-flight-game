const game = new Game();
let song;
let player;
let poles = [];

let playerImage, poleImage, plumImage, backgroundImages;

function preload() {
  game.preload();
  soundFormats("mp3");
  song = loadSound(
    "assets/song/Swoyd_Garden_-_Twine_Bread_&_Old Spells_-_02_Nightbird.mp3",
    loaded
  );
}

function loaded() {
  song.play();
}

function setup() {
  createCanvas(600, 600);
  game.setup();
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
