class Game {

    setup() {
        this.player = new Player()
        this.background = new Background()
        this.backgroundImages
        this.treasures = []

    }

    constructor() {
        this.backgroundImages = []
        this.plumImage
        // this.towerImage

    }

    preload() {
        this.backgroundImages = [
            { src: loadImage('assets/background/plx-1.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/plx-2.png'), x: 0, speed: 1 },
            { src: loadImage('assets/background/plx-3.png'), x: 0, speed: 2 },
            { src: loadImage('assets/background/plx-4.png'), x: 0, speed: 3 }

        ]

        this.playerImage = loadImage('assets/player/bat-grey-1.gif')
        this.plumImage = loadImage('assets/treasure/plum-50px.png')
        // this.towerImage = loadImage('assets/cell-tower-300px.png')
        this.song = loadSound('assets/song/Swoyd_Garden_-_Twine_Bread_&_Old Spells_-_02_Nightbird.mp3')
    }


    draw() {
        // console.log('game drawing')
        clear()
        this.background.draw()
        this.player.draw()
        // add plums to treasures array
        // frameCount provided by p5
        if (frameCount % 360 === 0) {
            this.treasures.push(new Treasure(this.plumImage))
            console.log(this.treasures)
        }

        // iterate over obstacles array and call draw function for each obstacle
        this.treasures.forEach(function (treasure) {
            treasure.draw()
        })
        // console.log(this)
        this.treasures = this.treasures.filter(treasure => {
            if (treasure.collision(this.player) || treasure.x < 0 - treasure.width) {
                return false
            } else {
                return true
            }
        })

    }

}
