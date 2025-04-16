let r1 = 155; // Length of first pendulum arm
let r2 = 115; // Length of second pendulum arm
let m1 = 5;  // Mass of first pendulum
let m2 = 2;  // Mass of second pendulum
let a1 =  Math.PI / 1.15; // Initial angle for first pendulum
let a2 = Math.PI / 2; // Initial angle for second pendulum
let a1_v = 0; // Angular velocity of first pendulum
let a2_v = 0; // Angular velocity of second pendulum
let g = .2;    // Gravity constant

let prevX, prevY; // For drawing trails
let path = []; // Stores trail points

let or1 = 155; // Length of first pendulum arm
let or2 = 115; // Length of second pendulum arm
let om1 = 4;  // Mass of first pendulum
let om2 = 1;  // Mass of second pendulum
let oa1 = 0 * Math.PI / 2; // Initial angle for first pendulum
let oa2 = Math.PI / 1.5; // Initial angle for second pendulum
let oa1_v = 0; // Angular velocity of first pendulum
let oa2_v = 0; // Angular velocity of second pendulum
let og = -.15;    // Gravity constant

let oprevX, oprevY; // For drawing trails
let opath = []; // Stores trail points

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(235, 200);

  let num1 = -g * (2 * m1 + m2) * sin(a1);
  let num2 = -m2 * g * sin(a1 - 2 * a2);
  let num3 = -2 * sin(a1 - a2) * m2;
  let num4 = a2_v * a2_v * r2 + a1_v * a1_v * r1 * cos(a1 - a2);
  let den = r1 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  let a1_a = (num1 + num2 + num3 * num4) / den;

  let num5 = 2 * sin(a1 - a2);
  let num6 = a1_v * a1_v * r1 * (m1 + m2);
  let num7 = g * (m1 + m2) * cos(a1);
  let num8 = a2_v * a2_v * r2 * m2 * cos(a1 - a2);
  let den2 = r2 * (2 * m1 + m2 - m2 * cos(2 * a1 - 2 * a2));
  let a2_a = (num5 * (num6 + num7 + num8)) / den2;

  // opposite

  let onum1 = -og * (2 * om1 + om2) * sin(oa1);
  let onum2 = -om2 * og * sin(oa1 - 2 * oa2);
  let onum3 = -2 * sin(oa1 - oa2) * om2;
  let onum4 = oa2_v * oa2_v * or2 + oa1_v * oa1_v * or1 * cos(oa1 - oa2);
  let oden = or1 * (2 * om1 + om2 - om2 * cos(2 * oa1 - 2 * oa2));
  let oa1_a = (onum1 + onum2 + onum3 * onum4) / oden;

  let onum5 = 2 * sin(oa1 - oa2);
  let onum6 = oa1_v * oa1_v * or1 * (om1 + om2);
  let onum7 = og * (om1 + om2) * cos(oa1);
  let onum8 = oa2_v * oa2_v * or2 * om2 * cos(oa1 - oa2);
  let oden2 = or2 * (2 * om1 + om2 - om2 * cos(2 * oa1 - 2 * oa2));
  let oa2_a = (onum5 * (onum6 + onum7 + onum8)) / oden2;

  

  translate(width / 2, height / 2);
  
  let x1 = r1 * sin(a1);
  let y1 = r1 * cos(a1);
  let x2 = x1 + r2 * sin(a2);
  let y2 = y1 + r2 * cos(a2);

  // opposite
  let ox1 = or1 * sin(oa1);
  let oy1 = or1 * cos(oa1);
  let ox2 = ox1 + or2 * sin(oa2);
  let oy2 = oy1 + or2 * cos(oa2);

//   stroke(225);
//   strokeWeight(2);
//   line(0, 0, x1, y1);
//   fill(225);
//   circle(x1, y1, 10);

//   stroke(225);
//   line(x1, y1, x2, y2);
//   fill(225);
//   circle(x2, y2, 10);
//   circle(0,0,10)


  // Store trail points
  path.push([x2, y2]);
  if (path.length > 200) {
    path.shift();
  }

  // opposite
  opath.push([ox2, oy2]);
  if (opath.length > 200) {
    opath.shift();
  }

  // Draw trails
  noFill();
  strokeWeight(2)
  stroke(20, 130, 240, 200);
  beginShape();
  for (let i = 0; i < path.length; i++) {
    vertex(path[i][0], path[i][1]);
  }
  endShape();
  
  // opposite
  stroke(255, 12, 5, 200);
  beginShape();
  for (let i = 0; i < opath.length; i++) {
    vertex(opath[i][0], opath[i][1]);
  }
  endShape();


  // Update angles using Euler integration
  a1_v += a1_a;
  a2_v += a2_a;
  a1 += a1_v;
  a2 += a2_v;
 
  // opposite
  oa1_v += oa1_a;
  oa2_v += oa2_a;
  oa1 += oa1_v;
  oa2 += oa2_v;

  // Apply damping for a realistic effect
  a1_v *= 0.99999999;
  a2_v *= 0.99999999;

  // opposite
  oa1_v *= 0.99999999;
  oa2_v *= 0.99999999;
}
