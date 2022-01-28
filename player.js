class Player{

    constructor(){

        this.heightFromGround = 0
        this.x = 190
        this.y = 320
        this.gravity= 0.2
        this.onGround = true
        this.width = 120
        this.height= 150
        this.isHurt = false
    }

    jump(){

        if(game.maxJumpCounter < 2){ 

            game.jumpSound.play()
            game.maxJumpCounter++
            this.heightFromGround = -8
            this.onGround = false
        }
    }

    draw(){

        this.heightFromGround += this.gravity
        this.y += this.heightFromGround

        if(this.y > 320){

            this.y = 320 
            game.maxJumpCounter = 0
            this.onGround = true
        }

        if(this.isHurt){
            image(game.playerHurt, this.x, this.y + 10, this.width + 50, this.height + 10)
        }
            

        if(this.onGround && !this.isHurt) 
            image(game.playerRun, this.x, this.y, this.width, this.height)
            
        if(!this.onGround && !this.isHurt)
            image(game.playerJumpImg, this.x, this.y, this.width, this.height)
    }
}