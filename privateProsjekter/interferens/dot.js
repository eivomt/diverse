class Dot {
    constructor(x,y,xVel,yVel) {
        this.x = x
        this.y = y
        this.xVel = xVel
        this.yVel = yVel
        this.yPos = y/2
    }

    show() {
        noStroke()
        fill(230)
        circle(this.x, this.y, 10)
    }

    update() {
        this.x = this.x + this.xVel
        this.yPos = this.yPos + this.yVel
        this.y = this.y + Math.sin(this.yPos) * 2
    }

    // getY() {
        
    // }
}