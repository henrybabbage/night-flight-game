class Game {

    setup() {
        this.player = new Player()
        this.background = new Background()
        this.backgroundImages
        this.obstacles = []

    }

    constructor() {
        this.backgroundImages = []
        this.plumImage

    }

    preload() {
        this.backgroundImages = [
            { src: loadImage('assets/background/plx-1.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/plx-2.png'), x: 0, speed: 1 },
            { src: loadImage('assets/background/plx-3.png'), x: 0, speed: 2 },
            { src: loadImage('assets/background/plx-4.png'), x: 0, speed: 3 }

        ]

        this.playerImage = loadImage('assets/player/bat-grey-1.gif')
        this.plumImage = loadImage('assets/obstacle/plum-50px.png')
        this.song = loadSound('assets/Swoyd_Garden_-_Twine_Bread_&_Old Spells_-_02_Nightbird.mp3')
    }


    draw() {
        // console.log('game drawing')
        clear()
        this.background.draw()
        this.player.draw()
        // add plums to obstacles array
        // frameCount provided by p5
        if (frameCount % 360 === 0) {
            this.obstacles.push(new Obstacle(this.plumImage))
            console.log(this.obstacles)
        }

        // iterate over obstacles array and call draw function for each obstacle
        this.obstacles.forEach(function (obstacle) {
            obstacle.draw()
        })
        // console.log(this)
        this.obstacles = this.obstacles.filter(obstacle => {
            if (obstacle.collision(this.player) || obstacle.x < 0 - obstacle.width) {
                return false
            } else {
                return true
            }
        })

    }

}
