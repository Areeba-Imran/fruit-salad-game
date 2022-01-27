class Player{

    constructor(){

        this.heightFromGround = 0
        this.x = 170
        this.y = 320
        this.gravity= 0.2
        this.onGround = true
        this.width = 120
        this.height= 150
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

        if(this.onGround) 
            image(game.playerImage, this.x, this.y, this.width, this.height)


        if(!this.onGround)
            image(game.playerJumpImg, this.x, this.y, this.width, this.height)
    }
}