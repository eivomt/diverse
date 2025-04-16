
stepSize = 30

x0 = 100
y0 = 100

function setup(){
    createCanvas(windowWidth, windowHeight)
    background(30)

    noStroke()
    fill(200)

    circle(x0,y0, 30)

    circle(windowWidth - 100, 100, 30)

    fill(60)
    rect(x0 +30, y0-30, windowWidth - 260, windowHeight - 100, 30)
    fill(30)
    rect(150, 90, windowWidth - 300, windowHeight - 140, 15)

    noFill()
    stroke(200)
    strokeWeight(1)

    circle(100,100,120)
    circle(windowWidth - 100,100,120)
    line(100, 100, windowWidth - 100, 100)

    x = 160

    while(x <= (windowWidth + 200)) {
        circle(x, 100, 5)
        circle(100, 100, (x -100)*2)
        circle(windowWidth - 100, 100, (x -100)*2)

        x += stepSize
    }
    circle(160,100, 5)

    // fill(20, 120)
    // rect(x0 +30, y0+200, windowWidth - 260, windowHeight - 400, 30)

} 
