class Particle {
    constructor(x,y) {
        this.x = x
        this.y = y
        this.acceleration = new createVector(0,0)
        this.position = new createVector(x,y)
        this.velocity = new createVector(10,-8)
    }

    show() {
        noStroke()
        fill(220)
        circle(this.position.x, this.position.y, 15)
    }

    update() {
        // acceleration.applyForces()
        // velocity += acceleration
        // position += velocity
        // this.x += Math.sin(100)
        // this.y += Math.cos(100)
        this.updateAcceleration()
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
    }

    updateAcceleration() {
        let v2c = new createVector(windowWidth/2, windowHeight/2)
        this.acceleration = v2c.sub(this.position).normalize()
    }

}