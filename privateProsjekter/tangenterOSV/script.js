let x = 170
let y = 200
let r = 40

let x2 = 550
let y2 = 780

let d = Math.sqrt(((x2-x)**2) + (y2-y)**2)
let alfa = Math.atan((y2-y)/(x2-x))

let sinTheta = r/d
let theta = Math.asin(sinTheta)

// xT1 = x + r*Math.cos(alfa)
// yT1 = y + r*Math.sin(alfa)
// xT2 = x + r*Math.cos(alfa - theta)
// yT2 = y + r*Math.sin(alfa - theta)

let xT1 = 137.86
let xT2 = 204.67
let yT1 = 223.81
let yT2 = 180.05


// let sinTheta = r/(Math.sqrt(((x2-x)^2) + (y2 -y)^2))
// let cosTheta = Math.sqrt(1-sinTheta^2)

function setup(){
    createCanvas(windowWidth, windowHeight)
    background(120)


    // noStroke()
    stroke(50)
    circle(x, y, 2*r)
    circle(x2,y2, 5)

    console.log(d)
    console.log('alfa = ' + alfa + 'pi')
    console.log(sinTheta)
    console.log(theta)

    fill(50)
    // circle(xT1, yT1, 10)
    circle(xT2, yT2, 10)
    
    line(x2,y2, xT1, yT1)
    // circle(xT1,yT1, 10)
    // circle(xT2,yT2, 5)

} 

// # Solve for the x-coordinates of the tangent points numerically
// x = sp.Symbol('x')

// # Solve the quadratic equation for x (circle-tangent intersection)
// x_tangent_solutions = []
// for m in m_values:
//     quadratic_eq = (x - xc)**2 + (m * (x - x2) + y2 - yc)**2 - r**2
//     x_solutions = sp.solve(quadratic_eq, x)
//     x_solutions = [sp.N(sol) for sol in x_solutions]
//     x_tangent_solutions.append(x_solutions)

// # Select the two valid x-coordinates
// x_tangent_points_numeric = [sol[0] for sol in x_tangent_solutions]

// # Compute the corresponding y-coordinates
// y_tangent_points_numeric = [m * (x_t - x2) + y2 for m, x_t in zip(m_values, x_tangent_points_numeric)]

// # Store the final tangent points
// tangent_points_numeric = list(zip(x_tangent_points_numeric, y_tangent_points_numeric))
// tangent_points_numeric
