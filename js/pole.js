class Pole {
  constructor(image) {
    this.image = image;
    this.x = width;
    this.y = 350;
    this.width = 50;
    this.height = 250;
  }

  collision(playerInfo) {
    // get the centre of player
    const playerX = playerInfo.x + playerInfo.width / 2;
    const playerY = playerInfo.y + playerInfo.height / 2;
    // get the centre of obstacle
    const poleX = this.x + this.width / 2;
    const poleY = this.y + this.height / 2;

    // measure the distance between player and obstacle
    if (dist(poleX, poleY, playerX, playerY) < 125) {
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
