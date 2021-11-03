class Background {

    draw() {
        // console.log('this is the background')
        // image(game.backgroundImages[0].src, 0, 0, width, height)
        // image(game.backgroundImages[1].src, 0, 0, width, height)
        // image(game.backgroundImages[2].src, 0, 0, width, height)
        // image(game.backgroundImages[3].src, 0, 0, width, height)
        
            game.backgroundImages.forEach(function (img) {
                if (game.player.alive) {
                    img.x -= img.speed
                }
                
                
                image(img.src, img.x, 0, width, height)
                image(img.src, img.x + width, 0, width, height)
                if (img.x <= - width) {
                    img.x = 0
                }

            })
          
    }


} 