import chroma from "chroma-js";

const color1Input = document.getElementById("color1");
const color2Input = document.getElementById("color2");
const color3Input = document.getElementById("color3");
const color4Input = document.getElementById("color4");
const button = document.getElementById("mixBtn");
const pixelContainer = document.querySelector(".pixel-container")
let quadraticScale = []

// antar kvadrat
const rows = 200
const columns = 200

for (let i =0; i < rows; i++) {
    let row = []
    let pixelRow = document.createElement("div")
    pixelRow.classList.add("pixelrow")
    for (let j =0; j<columns; j++) {
        let pixel = document.createElement("div")
        pixel.classList.add("pixel")
        pixel.id = "pixel" + i.toString() + '-' + j.toString()
        pixelRow.appendChild(pixel)
        row.push(pixel)
    }
    pixelContainer.appendChild(pixelRow)
    quadraticScale.push(row)
  }

button.addEventListener("click", () => {
  const color1 = {
    "value": color1Input.value,
    "x": 0,
    "y": 0
  }
  const color2 = {
    "value": color2Input.value,
    "x": columns,
    "y": 0
  }
  const color3 = {
    "value": color3Input.value,
    "x": 0,
    "y": rows
  }
  const color4 = {
    "value": color4Input.value,
    "x": columns,
    "y": rows
  }


//   if(resultScale.length > 1) {
//     for(let i =0; i<resultScale.length; i++) {
//         resultScale[i].remove()
//     }
//     resultScale = []
//   }

  let colors = [color1.value, color2.value, color3.value, color4.value]

  for (let i =0; i < rows; i++) {
    for (let j =0; j<columns; j++) {
        let pixel = quadraticScale[i][j]
        let weights = calculateWeight(calculateDistances(i,j))
        let color = chroma.average(colors, 'lch', [weights[0],weights[1],weights[2],weights[3]])
        pixel.style.backgroundColor = color
    }
  }
  
});

let calculateDistances = (x,y) => {
    let distances = []

    let c1dist = Math.sqrt((x**2) + (y**2))
    let c2dist = Math.sqrt(((columns - x)**2) + (y**2))
    let c3dist = Math.sqrt((x**2) + (rows - y)**2)
    let c4dist = Math.sqrt((columns - x)**2 + (rows - y)**2)
    
    distances.push(c1dist)
    distances.push(c2dist)
    distances.push(c3dist)
    distances.push(c4dist)

    return distances
}

let calculateWeight = (distances) => {
    let maxDistance = Math.sqrt(rows**2)
    let weights = []

    for(let i = 0; i<distances.length; i++) {
        weights.push((distances[i]/maxDistance))
    }

    return weights
}

