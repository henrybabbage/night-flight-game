class Game {

    setup() {
        this.player = new Player()
        this.background = new Background()

    }

    constructor() {
        this.backgroundImages = []

    }

    preload() {
        this.backgroundImages = [
            { src: loadImage('assets/background/plx-1.png'), x: 0, speed: 0 },
            { src: loadImage('assets/background/plx-2.png'), x: 0, speed: 1 },
            { src: loadImage('assets/background/plx-3.png'), x: 0, speed: 2 },
            { src: loadImage('assets/background/plx-4.png'), x: 0, speed: 3 }

        ]

        this.playerImage = loadImage('assets/player/bat-1.gif')

    }


    draw() {
        // console.log('game drawing')
        clear()
        this.background.draw()
        this.player.draw()
    }

}
