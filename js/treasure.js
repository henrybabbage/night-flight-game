class Treasure {

    constructor(image) {
        this.image = image
        this.x = width
        this.y = (Math.random() * height) / 2.5
        this.width = 30
        this.height = 30

    }

    collision(playerInfo){

        // console.log('collision', playerInfo)
        // get the centre of player
        const playerX = playerInfo.x + playerInfo.width / 2
        const playerY = playerInfo.y + playerInfo.height / 2
        // get the centre of obstacle
        const treasureX = this.x + this.width / 2
        const treasureY = this.y + this.height / 2
        // measure the distance between player and obstacle
        if (dist(treasureX, treasureY, playerX, playerY) > 25) {
            // this is not a collision
            return false
        } else {
            // 
            // game.player.score += 10
            // console.log(game.player.score)
            return true
        }
    }

    draw() {

        if (game.player.alive) {
        this.x--
        }
        
        image(this.image, this.x, this.y, this.width, this.height)

    }
}