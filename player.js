class Player{

    constructor(){

        this.heightFromGround = 0
        this.y = 320
        this.gravity= 0.2
        this.onGround = true
    }

    jump(){

        this.heightFromGround = -8
        this.onGround = false

    }

    draw(){

        this.heightFromGround += this.gravity
        this.y += this.heightFromGround
        if(this.y > 320){

            this.y = 320 
            game.maxJumpCounter = 0
            this.onGround = true
        }

        if(this.onGround) {

            image(game.playerImage, 170, this.y, 120, 150)

            
        }

        if(!this.onGround){
            image(game.playerJumpImg, 170, this.y, 120, 150)
        }
    }
}