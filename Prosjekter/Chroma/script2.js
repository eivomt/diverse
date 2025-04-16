import chroma from "chroma-js";

const color1Input = document.getElementById("color1");
const color2Input = document.getElementById("color2");
const resultDiv = document.getElementById("result");
const button = document.getElementById("mixBtn");
const resultBox = document.querySelector(".resulting-color")
// let resultScale = []
const scaleBoxContainer = document.querySelector(".scalebox-container")
const rows = 100
const columns = 100

button.addEventListener("click", () => {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
  
  //   const mixed = chroma.mix(color1, color2, 0.5, "rgb");
  //   resultDiv.textContent = `Result: ${mixed.hex()}`;
  //   resultDiv.style.color = mixed.hex();
  
  //   resultBox.style.backgroundColor = mixed.hex()
  
    if(resultScale.length > 1) {
      for(let i =0; i<resultScale.length; i++) {
          resultScale[i].remove()
      }
      resultScale = []
    }
    for(let i=0; i < 100; i++) {
      let scaleBox = document.createElement("div")
      scaleBox.classList.add("scalebox")
      let colorscale = chroma.scale([color1,color2]).mode("lab")
      scaleBox.style.backgroundColor = colorscale((i/100)).hex()
      scaleBoxContainer.appendChild(scaleBox)
      resultScale.push(scaleBox)
    }
  })