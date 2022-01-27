class Fruit{

    constructor(){

        this.randomFruitIndex
        this.speed = 4
        this.x = 1385
        this.fruitDisplayed = false
        this.currentFruit
    }

    draw(){

        if(!this.fruitDisplayed){
            this.randomFruitIndex = Math.floor(Math.random() * game.fruitImgArr.length)
            this.y = Math.random() * 400
            this.fruitDisplayed = true
        }

        this.currentFruit = game.fruitImgArr[this.randomFruitIndex]

        this.x -= this.speed
        image(this.currentFruit.src, this.x, this.y, this.currentFruit.widthOfFruit, this.currentFruit.heightOfFruit)
        
    }

    collision(playerInfo) {

		// here the coin detects a collision with the player
		// the middle of the obstacle
		let fruitX = this.x + this.currentFruit.widthOfFruit/2
		let fruitY = this.y + this.currentFruit.heightOfFruit/2
		// the middle of the player
		let playerX = playerInfo.x + playerInfo.width/2
		let playerY = playerInfo.y + playerInfo.height / 2
		// console.log('collision', playerInfo)

        // console.log('distance: ' +  dist(fruitX, fruitY, playerX, playerY))
		if (dist(fruitX, fruitY, playerX, playerY) < 90) {

            game.score += 10
			console.log("score " + game.score)
			return true
		} 
        else {
			
			return false
		}
	}
}