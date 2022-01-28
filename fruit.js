class Fruit{

    constructor(){

        this.randomFruitIndex
        this.speed = 4
        this.x = 1385                    //same as canvas width
        this.fruitDisplayed = false
        this.currentFruit
    }

    draw(){

        if(!this.fruitDisplayed){       //gets a random y-index only once per object
            this.randomFruitIndex = Math.floor(Math.random() * game.fruitImgArr.length)
            this.y = Math.random() * 400
            this.fruitDisplayed = true
        }

        this.currentFruit = game.fruitImgArr[this.randomFruitIndex]     //gets a random object from the array

        this.x -= this.speed
        image(this.currentFruit.src, this.x, this.y, this.currentFruit.widthOfFruit, this.currentFruit.heightOfFruit)
        
    }

    collision(playerInfo) {

		let fruitX = this.x + this.currentFruit.widthOfFruit/2
		let fruitY = this.y + this.currentFruit.heightOfFruit/2
	
		let playerX = playerInfo.x + playerInfo.width/2
		let playerY = playerInfo.y + playerInfo.height / 2

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