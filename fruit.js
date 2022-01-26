class Fruit{

    constructor(){

        this.randomFruitIndex
        this.speed = 2
        this.x = 1385
        this.fruitDisplayed = false
        this.currentFruit
    }

    draw(){

        if(!this.fruitDisplayed){
            this.randomFruitIndex = Math.floor(Math.random() * game.fruitImgArr.length)
            this.randomIndexOfY = Math.random() * 400
            this.fruitDisplayed = true
        }

        this.currentFruit = game.fruitImgArr[this.randomFruitIndex]

        this.x -= this.speed
        image(this.currentFruit.src, this.x, this.randomIndexOfY, this.currentFruit.widthOfFruit, this.currentFruit.heightOfFruit)
    }
}