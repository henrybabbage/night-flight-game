const game = new Game();
let song;
let player;
let poles = []; 
// let playing = false;

let playerImage, poleImage, plumImage, backgroundImages;

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

    // for (let i = 0; i < 20, i++) {
    //     poles[i] = new Pole (50, 250)
    // }

}

function draw() {
    game.draw();

    // for (let x = 0, i < 20; i++) {
    //     poles[i].body();
    //     poles[i].move();
    
    // }


    // if (frameCount % 50 === 0) {
    //     poles.push(new Pole());
    //     playing = true;  
    // }

    // if (poles[i].hit(player)) {
    //     playing = false;
    //     noLoop();
    // }

}

function keyPressed() {
    if (keyCode === 32) {
        game.player.jump()
    }

}

