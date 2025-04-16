class interferensDot {
    constructor(x, y,xVel) {
        this.x = x
        this.y = y
    }

    show() {
        push()
        fill(220,20,40)
        circle(this.x, this.y, 7)
        pop()
    }

    update(newY) {
        this.x = this.x + xVel
        this.y = newY
    }
}