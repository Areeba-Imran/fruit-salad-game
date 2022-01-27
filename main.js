const game = new Game()

let gameStarted = false

function setup(){

    createCanvas(1385,600)
    game.setup()
}

function preload(){

    game.preload()
}

function draw(){

    if(gameStarted){

        if(game.lives > 0)
            game.draw()

        else{

            game.gameOver()
        }
    }

    else{

        game.gameInstructions()
    }
    

}

function keyPressed(){

    if(keyCode === 32 && !gameStarted)
        gameStarted = true

    if(keyCode === 32){

        game.player.jump()
    }

    if(keyCode === 13){
        location.reload()
    }

    if(keyCode === 16){
        game.pause = !game.pause
    }

    
}
