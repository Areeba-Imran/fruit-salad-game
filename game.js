class Game{

    constructor(){

        this.backgroundImgArr = []
        this.maxJumpCounter = 0
        this.fruitsDisplayedArr = []
        this.score = 0
    }

    setup(){
        frameRate()

        this.background = new Background()
        this.player = new Player()
        this.fruit = new Fruit()
        
    }

    preload(){
 
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

        this.playerImage = loadImage('assets/player-run.gif')
        this.playerJumpImg = loadImage('assets/player-jump.gif')
    }

    draw(){

        this.background.draw()

        if(frameCount % 180  === 0){
           this.fruitsDisplayedArr.push(new Fruit())
        }

        this.fruitsDisplayedArr.forEach(fruitObj => {
            fruitObj.draw()
        })
            this.fruitsDisplayedArr.filter((fruitObj)=>{
                if(fruitObj.collision(this.player)){

                    this.fruitsDisplayedArr.splice(fruitObj,1)
                    return true
                
                }

                else
                return false
            })
        

        this.player.draw()


        fill(255)
        rect(10, 10, 120, 100, 20);

        fill(8)
        text(`Score: ${game.score}`, 15, 30);


        
    }
}