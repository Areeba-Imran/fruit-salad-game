const game = new Game()

function setup(){

    createCanvas(1385,600)
    game.setup()
}

function preload(){

    game.preload()
}

function draw(){

    game.draw()

}

function keyPressed(){

    if(keyCode === 32){

        if(game.maxJumpCounter < 2){

            game.maxJumpCounter++
            game.player.jump()
        }
    }
}
