class Game {
  setup() {
    this.background = new Background();
    this.player = new Player();
    this.song = new Audio(
      "assets/song/Swoyd_Garden_-_Twine_Bread_&_Old Spells_-_02_Nightbird.mp3"
    );
    this.endSong = new Audio(
      "assets/song/Swoyd Garden - Twine Bread & Old Spells - 05 Hanging With Stars.mp3"
    );

    this.backgroundImages;
    this.treasures = [];
    this.poles = [];
    this.drones = [];
  }

  constructor() {
    this.backgroundImages = [];
    this.plumImage;
    this.poleImage;
    this.droneImage;
    this.alive = true;
    this.song;
    this.endSong;
    this.gameStart = false;
  }

  preload() {
    this.backgroundImages = [
      { src: loadImage("assets/background/plx-1.png"), x: 0, speed: 0 },
      { src: loadImage("assets/background/plx-2.png"), x: 0, speed: 1 },
      { src: loadImage("assets/background/plx-3.png"), x: 0, speed: 2 },
      { src: loadImage("assets/background/plx-4.png"), x: 0, speed: 3 },
    ];

    this.startScreenImage = loadImage("assets/startscreen/nightflight-start-screen.gif");
    this.playerImage = loadImage("assets/player/bat-grey-1.gif");
    this.plumImage = loadImage("assets/treasure/treasure-transparent-85px.gif");
    this.poleImage = loadImage("assets/pole/cell-tower-300px.png");
    this.droneImage = loadImage("assets/drone/drone-115w-80h-px.gif")
  }

  draw() {
    if (game.gameStart === false) {
      image(game.startScreenImage, 0, 0, 600, 600);
    } else if (game.gameStart === true) {
      if (this.alive) {
        clear();
        this.endSong.pause();
        this.background.draw();
        this.player.draw();
        this.drawTreasure();
        this.drawPole();
        this.drawDrone();
        // text("Score: " + score, 10, 20);
        this.song.play();
      } else {
        // gameover image
        document.body.style.backgroundColor = "black";
        document.querySelector("#title-container > h1").innerText =
          "GAME OVER";
        document.querySelector("#title-container > h2").innerText =
          "PRESS SPACEBAR TO RESTART";
        this.song.pause();
        this.endSong.play();
      }
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

  drawDrone() {
    if (frameCount % 180 === 0) {
      this.drones.push(new Drone(this.droneImage));
    }
    // iterate over treasures array and call draw function for each obstacle
    this.drones.forEach(function (drone) {
      drone.draw();
    });

    this.drones = this.drones.filter((drone) => {
      drone.collision(this.player);
      if (drone.x < 0 - drone.width) {
        return false;
      } else {
        return true;
      }
    });
  }

  drawTreasure() {
    if (frameCount % 180 === 0) {
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
    this.poles = [];
    this.treasures = [];
    this.drones = [];
    this.player.x = 0;
    this.player.y = 0;
    score = 0;
    document.body.style.backgroundColor = "white";
    document.querySelector("#title-container > h1").innerText =
      "";
    document.querySelector("#title-container > h2").innerText =
      "";
    document.querySelector("#title-container > span").innerText = `SCORE: ${score}`;
  }
}
