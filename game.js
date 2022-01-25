class Game{

    constructor(){

        this.backgroundImgArr = []
    }

    setup(){

        this.background = new Background()
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
            {src: loadImage('assets/flooring.png'), x: 0, y: 380, widthOfImg: 1389, heightOfImg: 220, speed: 4},
            {src: loadImage('assets/foreground.png'), x: 0, y: 438, widthOfImg: 1365, heightOfImg: 160, speed: 4}
        ]

        
    }

    draw(){

        this.background.draw()
    }
}