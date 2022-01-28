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

    if(gameStarted){                            //if game has started then execute game's draw()
                                                
        if(game.lives > 0)
            game.draw()

        else{
            game.gameOver()
        }
    }

    else                                          //else display game instructions       
        game.gameInstructions()
    
}

function keyPressed(){

    if(keyCode === 32 && !gameStarted)              //Spacebar for initial starting of the game
        gameStarted = true

    if(keyCode === 32)                              //Spacebar for jump 
        game.player.jump()
    

    if(keyCode === 13)                              //Enter for playing again/ screen reload
        location.reload()
    

    if(keyCode === 16)                              //Shift for game pause
        game.pause = !game.pause
}
