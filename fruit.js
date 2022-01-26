class Fruit{

    constructor(){

        this.randomFruitIndex
        this.speed = 1
        this.x = 1385
        this.fruitAdded = false
    }

    draw(){

        //setInterval(this.draw, 3000)
console.log('fruit draw')

            if(!this.fruitAdded){
        this.randomFruitIndex = Math.floor(Math.random() * game.fruitImgArr.length)
        this.randomIndexOfY = Math.floor(Math.random() * 400)
        this.fruitAdded = true
            }

        this.x -= this.speed
        image(game.fruitImgArr[this.randomFruitIndex].src, this.x, this.randomIndexOfY, 100, 100)
    }
}