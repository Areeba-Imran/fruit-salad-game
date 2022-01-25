class Background{

    draw(){

        game.backgroundImgArr.forEach(img => {

            img.x -= img.speed
            image(img.src, img.x, img.y, img.widthOfImg, img.heightOfImg)
            image(img.src, img.x + width, img.y, img.widthOfImg, img.heightOfImg)
            console.log(img)

            if(img.x <= -width)
                img.x = 0
        })
    }
}