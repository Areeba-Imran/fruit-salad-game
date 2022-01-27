class Obstacle{

    constructor(){

        this.x = 1385
        this.y = 330 
        this.speed = 4.5
        this.width = 100
        this.height = 150
        this.alreadyCollided = false
    }

    draw(){

        this.x -= this.speed
        
        image(game.obstacleImg, this.x, this.y, this.width, this.height)
    }

    collision(playerInfo) {

	
		let obstacleX = this.x + this.width/2
		let obstacleY = this.y + this.height/2
		// the middle of the player
		let playerX = playerInfo.x + playerInfo.width/2
		let playerY = playerInfo.y + playerInfo.height/2

    
		if (dist(obstacleX, obstacleY, playerX, playerY) < 90 && !(this.alreadyCollided)) {

            game.lives --
			console.log("lives: " + game.lives)
            this.alreadyCollided = true
         
			return true
		} 
        else {
			frameRate(60)
			return false
		}
    }
}