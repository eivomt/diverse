class Moon {
    constructor(x,y,xVelocity,yVelocity) {
        this.x = x
        this.y = y
        this.xVelocity = xVelocity
        this.yVelocity = yVelocity
        this.position = new createVector(this.x,this.y)
        this.acceleration = new createVector(0,0)
        this.velocity = new createVector(this.xVelocity,this.yVelocity)
    }

    show() {
        noStroke()
        fill(230)
        circle(this.position.x, this.position.y, 5)
    }

    update(particlePositionX, particlePositionY) {
        this.updateAcceleration(particlePositionX, particlePositionY)
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
    }

    updateAcceleration(particlePositionX, particlePositionY) {
        let v2p = new createVector(particlePositionX, particlePositionY)
        let distance = v2p.mag()
        this.acceleration = v2p.sub(this.position).normalize().mult(6)
    }
}