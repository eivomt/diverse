class rollingCircle {
    constructor(x,y,xVel, amplitude, phaseShift = 0) {
        this.x = x
        this.y = y
        this.xVel = xVel
        this.amplitude = amplitude
        this.phaseShift = phaseShift
    }

    show() {
        push()
        noStroke()
        fill(240)
        circle(this.x, this.y + Math.sin((this.x + this.phaseShift)/30) * this.amplitude, 5)
        pop()
    }

    update() {
        this.x = this.x + this.xVel
    }

    getY() {
        return this.y + Math.sin((this.x + this.phaseShift)/30) * this.amplitude
    }
}