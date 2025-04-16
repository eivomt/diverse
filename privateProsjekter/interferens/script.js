function setup() {
    createCanvas(windowWidth, windowHeight)
    background(2,10, 30)
    centerVector = createVector(windowWidth/2, windowHeight/2)
    

    noStroke()
    fill(25)

    xVel = 1

    waves = []
    intDots= []
    // wave1 = new Dot(-windowWidth/2, 0, 2, .05)
    // waves.push(wave1)
    // wave2 = new Dot(-windowWidth/2, 0, 2, .02)
    // waves.push(wave2)
    // wave3 = new Dot(-windowWidth/2,0,2, 10)
    // waves.push(wave3)
    rCircle = new rollingCircle(-windowWidth/2, 0, xVel, 40)
    waves.push(rCircle)
    rCircle = new rollingCircle(-windowWidth/2, 0, xVel/1.2, 170, 70)
    waves.push(rCircle)
    rCircle = new rollingCircle(-windowWidth/2, 0, xVel/.9, 30, 40)
    waves.push(rCircle)
    rCircle = new rollingCircle(-windowWidth/2, 0, xVel/.75, 50, 45)
    waves.push(rCircle)
    rCircle = new rollingCircle(-windowWidth/2, 0, xVel/.7, 20, 60)
    waves.push(rCircle)

    intDot = new interferensDot(-windowWidth/2,0,xVel)
    intDots.push(intDot)
}

function draw() {
    background(2,15, 30,6)
    intDotY = 0
    translate(centerVector.x, centerVector.y)
    push()
    stroke(5)
    // line(-windowWidth/2, 0, windowWidth/2, 0)
    pop()
    for(let i=0; i<waves.length;i++) {
        waves[i].show()
        waves[i].update()
        if(i <5) {
            intDotY += waves[i].getY()
        }
    }

    if(frameCount%40 == 0) {
        rCircle = new rollingCircle(-windowWidth/2, 0, xVel, 40)
        waves.push(rCircle)
        rCircle = new rollingCircle(-windowWidth/2, 0, xVel/1.2, 170, 70)
        waves.push(rCircle)
        rCircle = new rollingCircle(-windowWidth/2, 0, xVel/.9, 30, 40)
        waves.push(rCircle)
        rCircle = new rollingCircle(-windowWidth/2, 0, xVel/.75, 50, 45)
        waves.push(rCircle)
        rCircle = new rollingCircle(-windowWidth/2, 0, xVel/.7, 20, 60)
        waves.push(rCircle)

        // intDot = new interferensDot(-windowWidth/2,0,xVel)
        // intDots.push(intDot)
    }

    // console.log(waves[0].getY())

    
    // intDot.show()
    // intDot.update(intDotY)

    // for(i=0;i<intDots.length; i++) {
    //     intDots[i].show()
    //     intDots[i].update(intDotY)
    // }
}