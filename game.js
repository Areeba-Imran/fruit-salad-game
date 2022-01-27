class Game{

    constructor(){
        
        this.fontsize = 15
        

        this.backgroundImgArr = []
        this.maxJumpCounter = 0
        this.fruitsDisplayedArr = []
        this.score = 0
        this.lives = 3
        this.obstaclesDisplayedArr = []
        this.pause = false
    }

    setup(){

        textFont(this.font);
        textSize(this.fontsize);

        this.background = new Background()
        this.player = new Player()
        this.fruit = new Fruit()
        this.obstacle = new Obstacle()
    }

    preload(){

        this.font = loadFont('assets/PressStart2P-Regular.ttf');

        this.backgroundImgArr = [
            {src: loadImage('assets/sky.png'), x: 0, y: 0, widthOfImg: 1385, heightOfImg: 600, speed: 0},
            {src: loadImage('assets/City.png'), x: 130, y: 60, widthOfImg: 1000, heightOfImg: 270, speed: 0.5},
            {src: loadImage('assets/Other side.png'), x: 0, y: 270, widthOfImg: 1385, heightOfImg: 90, speed: 1},
            {src: loadImage('assets/River.png'), x: 0, y: 300, widthOfImg: 1385, heightOfImg: 230, speed: 1.5},
            {src: loadImage('assets/Tree2.png'), x: 70, y: 0, widthOfImg: 1190, heightOfImg: 420, speed: 2},
            {src: loadImage('assets/Tree1.png'), x: 0, y: 0, widthOfImg: 1385, heightOfImg: 430, speed: 3},
            {src: loadImage('assets/Bush.png'), x: 0, y: 280, widthOfImg: 1385, heightOfImg: 185, speed: 3},
            {src: loadImage('assets/Random items.png'), x: 130, y: 300, widthOfImg: 1195, heightOfImg: 125, speed: 3},
            {src: loadImage('assets/flooring.png'), x: 0, y: 380, widthOfImg: 1389, heightOfImg: 220, speed: 4.5},
            {src: loadImage('assets/foreground.png'), x: 0, y: 438, widthOfImg: 1365, heightOfImg: 160, speed: 4.5}
        ]

        this.fruitImgArr = [
            {src: loadImage('assets/fruits/avacado.png'), widthOfFruit: 75, heightOfFruit: 75},
            {src: loadImage('assets/fruits/banana.png'), widthOfFruit: 80, heightOfFruit: 65},
            {src: loadImage('assets/fruits/blueberry.png'), widthOfFruit: 85, heightOfFruit: 75},
            {src: loadImage('assets/fruits/cherry.png'), widthOfFruit: 75, heightOfFruit: 75},
            {src: loadImage('assets/fruits/grapes.png'), widthOfFruit: 65, heightOfFruit: 85},
            {src: loadImage('assets/fruits/kiwi.png'), widthOfFruit: 75, heightOfFruit: 60},
            {src: loadImage('assets/fruits/orange.png'), widthOfFruit: 75, heightOfFruit: 75},
            {src: loadImage('assets/fruits/peach.png'), widthOfFruit: 60, heightOfFruit: 60},
            {src: loadImage('assets/fruits/pear.png'), widthOfFruit: 90, heightOfFruit: 90},
            {src: loadImage('assets/fruits/pineapple.png'), widthOfFruit: 60, heightOfFruit: 90},
            {src: loadImage('assets/fruits/pomegranate.png'), widthOfFruit: 80, heightOfFruit: 75},
            {src: loadImage('assets/fruits/raspberry.png'), widthOfFruit: 85, heightOfFruit: 75},
            {src: loadImage('assets/fruits/strawberry.png'), widthOfFruit: 70, heightOfFruit: 70},
            {src: loadImage('assets/fruits/watermelon.png'), widthOfFruit: 90, heightOfFruit: 80}
        ]

        this.obstacleImg = loadImage('assets/obstacles/campfire.gif')

        this.playerRun = loadImage('assets/player/player-run.gif')
        this.playerJumpImg = loadImage('assets/player/player-jump.gif')
        this.playerHurt= loadImage('assets/player/player-hurt.png')
        this.playerDie = loadImage('assets/player/player-die.gif')
        this.playerStillImg = loadImage('assets/player/player-intro-img.png')

        this.livesRemaining = loadImage('assets/lives.png')
    }

    draw(){

        if (!this.pause){

            this.background.draw()

            if(frameCount % 180  === 0){

            this.fruitsDisplayedArr.push(new Fruit())
            }

            this.fruitsDisplayedArr.forEach(fruitObj => {

                fruitObj.draw()   
            })

            this.fruitsDisplayedArr.forEach((fruitObj)=>{
                if(fruitObj.collision(this.player)){

                    this.fruitsDisplayedArr.splice(fruitObj,1)
                    return true
                }

                else
                    return false
            })

            if(frameCount % 300 === 0)
                this.obstaclesDisplayedArr.push(new Obstacle())
            
            this.obstaclesDisplayedArr.forEach(obstacle => {

                obstacle.draw()
            })

            this.obstaclesDisplayedArr.forEach(obstacle => {

                if(obstacle.collision(this.player)){

                    this.player.isHurt = true
                    frameRate(2)
                    return true
                }

                else
                this.player.isHurt = false
                    return false
            })
            

            this.player.draw()


            fill(117, 28, 108, 150)
            rect(5, 5, 200, 100, 20);

            fill(255)
            text(`Score: ${game.score}`, 15, 40);
            text(`Lives: `, 15, 70);

            this.createHeartIcons()
        }

        else{

            fill(0)
            text('Game Paused', 600, 50)
            text('Press Enter to Resume', 550, 470)
        }
    }

    createHeartIcons(){

        let initialPositionX = 110
        let distanceBetweenHearts = 22

        for(let i = this.lives; i > 0; i--){

            image(this.livesRemaining, initialPositionX, 50, 20, 20)
            initialPositionX += distanceBetweenHearts
       }
    }

    gameOver(){

        fill(0)
        textSize(30);
        text('Game Over', 600, 100)
        text('Press Enter to Play Again', 400, 470)
    }

    gameInstructions(){


       // stroke(167, 243, 241)
        strokeWeight(3)
        fill(167, 243, 241)
        rect(310, 180, 740, 250, 10)

        fill(0)
        text('Help Rosie to pick some fruit for a fruit salad!', 320, 210)
        text('Press Spacebar to catch fruit and avoid fire', 360, 280)
        text('Press Shift to Pause', 540, 350)
        text('Press Spacebar to Start!', 520, 420)

        image(this.playerStillImg, 270, 300, 150, 150)
    }
}