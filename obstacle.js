class Obstacle{

    constructor(){

        this.x = 1385
        this.y = 330 
        this.speed = 4.5
    }

    draw(){

        this.x -= this.speed
        
        image(game.obstacleImg, this.x, this.y, 100, 150)


    }
}