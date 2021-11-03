class Game {
  setup() {
    this.background = new Background();
    this.player = new Player();
    this.backgroundImages;
    this.treasures = [];
    this.poles = [];
  }

  constructor() {
    this.backgroundImages = [];
    this.plumImage;
    this.poleImage;
    this.alive = true;
  }

  preload() {
    this.backgroundImages = [
      { src: loadImage("assets/background/plx-1.png"), x: 0, speed: 0 },
      { src: loadImage("assets/background/plx-2.png"), x: 0, speed: 1 },
      { src: loadImage("assets/background/plx-3.png"), x: 0, speed: 2 },
      { src: loadImage("assets/background/plx-4.png"), x: 0, speed: 3 },
    ];

    this.playerImage = loadImage("assets/player/bat-grey-1.gif");
    this.plumImage = loadImage("assets/treasure/plum-50px.png");
    this.song = loadSound(
      "assets/song/Swoyd_Garden_-_Twine_Bread_&_Old Spells_-_02_Nightbird.mp3"
    );
    this.poleImage = loadImage("assets/pole/cell-tower-300px.png");
  }

  draw() {
    if (this.alive) {
      clear();
      this.background.draw();
      this.player.draw();
      this.drawTreasure();
      this.drawPole();
    } else {
      // gameover image
      document.body.style.backgroundColor = "black";
      document.querySelector("#title-container > h1").innerText = "GAME OVER!"
        document.querySelector("#title-container > h2").innerText ="Press spacebar to restart";
    }
  }

  drawPole() {
    if (frameCount % 100 === 0) {
      this.poles.push(new Pole(this.poleImage));
    }
    // iterate over treasures array and call draw function for each obstacle
    this.poles.forEach(function (pole) {
      pole.draw();
    });

    this.poles = this.poles.filter((pole) => {
      pole.collision(this.player);
      if (pole.x < 0 - pole.width) {
        return false;
      } else {
        return true;
      }
    });
  }

  drawTreasure() {
    if (frameCount % 360 === 0) {
      this.treasures.push(new Treasure(this.plumImage));
    }
    // iterate over treasures array and call draw function for each obstacle
    this.treasures.forEach(function (treasure) {
      treasure.draw();
    });

    this.treasures = this.treasures.filter((treasure) => {
      if (treasure.collision(this.player) || treasure.x < 0 - treasure.width) {
        return false;
      } else {
        return true;
      }
    });
  }
  reset() {
   
    this.alive = true;
    document.body.style.backgroundColor = "white";
    document.querySelector("#title-container > h1").innerText = "GAME";
    this.poles = [];
    this.treasures = [];
    this.player.x = 0;
    this.player.y = 0;
  }
}
