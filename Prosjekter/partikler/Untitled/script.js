function setup() {
    createCanvas(windowWidth, windowHeight)
    background(35)

    noStroke()
    fill(25)
    // circle(windowWidth/2, windowHeight/2, 100)
    
    particles = []
    particle1 = new Particle(windowWidth/5, windowHeight/3)
    particle2 = new Particle(windowWidth/7, windowHeight/5)
    particle3 = new Particle(windowWidth/2 +100, windowHeight/25)
    // particle4 = new Particle(windowWidth/7, windowHeight/2)
    // particle5 = new Particle(windowWidth/8, windowHeight/2)
    // particle6 = new Particle(windowWidth/12, windowHeight/10)
    // particle7 = new Particle(windowWidth/2 -150, windowHeight/18)
    // particle8 = new Particle(windowWidth/2, windowHeight/9)

    particles.push(particle1)
    particles.push(particle2)
    particles.push(particle3)
    // particles.push(particle4)
    // particles.push(particle5)
    // particles.push(particle6)
    // particles.push(particle7)
    // particles.push(particle8)

    // assume penguin is a cylinder

    moons = []
    for (let i =0; i<particles.length; i++) {
        moons.push(new Moon(particles[i].position.x +10, particles[i].position.y+20,particles[i].velocity.x,particles[i].velocity.y))
        // moons.push(new Moon(particles[i].position.x + 30, particles[i].position.y + 10, particles[i].velocity.x, particles[i].velocity.y))
        // moons.push(new Moon(particles[i].position.x + 10, particles[i].position.y + 30, particles[i].velocity.x, particles[i].velocity.y))
        // moons.push(moon1)
        // moons.push(moon2)
        // moons.push(moon3)
    }

}

function draw() {
    background(10, 5)
    for(let i = 0; i < particles.length; i++) {
        particles[i].show()
        particles[i].update()
    }
    // for(let i = 0; i < particles.length; i++) {
    //     for(let j =0; j < 1; j++) {
    //         moons[j + i*1].show()
    //         moons[j + i*1].update(particles[i].position.x, particles[i].position.y)
    //     }
    // }

    // circle(windowWidth/2, windowHeight/2, 100)
}