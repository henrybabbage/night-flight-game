const game = new Game();
let song;

function preload() {
    game.preload();
    soundFormats('mp3');
    song = loadSound('assets/song/Swoyd_Garden_-_Twine_Bread_&_Old Spells_-_02_Nightbird.mp3', loaded);
}

function loaded() {
    song.play();

}

function setup() {
    // song.play();
    // song.setVolume(0.5);
    createCanvas(600, 600);
    game.setup();

}

function draw() {
    game.draw();
    // song.setVolume(0.5);

}

function keyPressed() {
    if (keyCode === 32) {
        game.player.jump()
    }

}

