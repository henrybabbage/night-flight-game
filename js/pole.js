class Pole {

    constructor(image) {
        this.image = image
        this.x = width;
        this.y = 350
        this.width = 50
        this.height = 250
        // this.x = colour(0, 255, 0);
    }
 




    // body() {
    //     rect(this.x, this.y, 50, 250);
    //     fill(this.c);
    // }

    // move() {
    //     this.x++;

    //     if (this.x > 0) {
    //         this.x = width;
    //     }
    // }



    // collision(playerInfo){

    //     // console.log('collision', playerInfo)
    //     // get the centre of player
    //     const playerX = playerInfo.x + playerInfo.width / 2
    //     const playerY = playerInfo.y + playerInfo.height / 2
    //     // get the centre of obstacle
    //     const poleX = this.x + this.width / 2
    //     const poleY = this.y + this.height / 2
    //     // measure the distance between player and obstacle
    //     if (dist(poleX, poleY, playerX, playerY) > 25) {
    //         // this is not a collision
    //         return false
    //     } else {
    //         // 
    //         // game.player.score += 10
    //         // console.log(game.player.score)
    //         return true
    //     }
    // }

    draw() {

        if (game.player.alive) {
            this.x-=5
        }
        
        image(this.image, this.x, this.y, this.width, this.height)


    }
}
