class Drone {
    constructor(image) {
      this.image = image;
      this.x = width;
      this.y = (Math.random() * height) / 2.5;
      this.width = 90;
      this.height = 90;
    }
  
    collision(playerInfo) {
      // get the centre of player
      const playerX = playerInfo.x + playerInfo.width / 2;
      const playerY = playerInfo.y + playerInfo.height / 2;
      // get the centre of obstacle
      const droneX = this.x + this.width / 2;
      const droneY = this.y + this.height / 2;
      // measure the distance between player and obstacle
      if (dist(droneX, droneY, playerX, playerY) < 50) {
        console.log('collision')
        game.alive = false;
      }
    }
  
    draw() {
      if (game.player.alive) {
        this.x -= 4.5;
      }
  
      image(this.image, this.x, this.y, this.width, this.height);
    }
  }
  