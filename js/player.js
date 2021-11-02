class Player {

    constructor() {
        this.score = 0;
        this.velocity = 0;
        this.gravity = 0.2;
        this.width = 100;
        this.height = 100;
        this.x = 25;
        this.y = height / 2;
        
    }


    draw() {
        // gravity
        this.velocity += this.gravity
        this.y += this.velocity
        // if player moves to bottom of canvas correct position
        if (this.y >= height) {
            this.y = height - this.height;
            this.velocity = 0;
        }

        image(game.playerImage, this.x, this.y, this.width, this.height)

    }

    jump() {
        console.log('jump')
        this.velocity = - 10
    }

}