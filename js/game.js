class Game {

    setup() {
        this.background = new Background()
        this.player = new Player()
        this.backgroundImages
        this.treasures = []
        this.poles = []

    }

    constructor() {
        this.backgroundImages = []
        this.plumImage
        this.poleImage
        this.alive = true
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
        this.song = loadSound('assets/song/Swoyd_Garden_-_Twine_Bread_&_Old Spells_-_02_Nightbird.mp3')
        this.poleImage = loadImage('assets/pole/cell-tower-300px.png')
        
    }


    draw() {
        console.log(this.alive)
        clear()
        this.background.draw()
        this.player.draw()

        // plums
        // add plums to treasures array
        // frameCount provided by p5
        if (frameCount % 360 === 0) {
            this.treasures.push(new Treasure(this.plumImage))
            console.log(this.treasures)
        }
        // iterate over treasures array and call draw function for each obstacle
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

        // poles
        // add poles to poles array
        // frameCount provided by p5
        if (frameCount % 800 === 0) {
            this.poles.push(new Pole(this.poleImage))
            console.log(this.poles)
        }
        // iterate over treasures array and call draw function for each obstacle
        this.poles.forEach(function (pole) {
            if (pole.x > - pole.width) {
                pole.draw()
            }
        
        })

        // console.log(this)
        // this.poles = this.poles.filter(pole => {
        //     if (pole.collision(this.player) || pole.x < 0 - pole.width) {
        //         return false
        //     } else {
        //         return true
        //     }
        // })


    }
    
     checkIfAlive() {

        this.poles.forEach(function (pole) {
           // console.log(Math.abs(game.player.x - pole.x))
           if ((Math.abs(game.player.x - pole.x) < 100)  && (game.player.y > 330)) {

                //console.log('collision')  
                game.player.alive = false
            }

            else {
                game.player.alive = true
            }

        })
    }
    // checkIfAlive() {
    //     this.poles.forEach(function(pole){
    //         let x = Math.abs(game.player.x + game.player.width - pole.x) < 5
    //         console.log(x)
    //     })
    // }

}
