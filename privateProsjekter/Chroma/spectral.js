import csvUrl from './LMSdata.csv';
import chroma from "chroma-js";

fetch(csvUrl)
  .then(res => res.text())
  .then(data => {
    const results = Papa.parse(data, {
      header: false,
      dynamicTyping: true,
      skipEmptyLines: true
    });

    let gammaCorrect = (c) => {
        return (c <= 0.0031308)
        ? 12.92 * c
        : 1.055 * Math.pow(c, 1/2.4) - 0.055;
    }

    let colorObject = {}

    // LMSdata.csv contains CIE2006 LMS values
    // transformation matrix
    // | X |   =  |  0.4002   0.7075  -0.0808 |   | L |
    // | Y |      | -0.2263   1.1653   0.0457 | × | M |
    // | Z |      |  0.0000   0.0000   0.9182 |   | S |

    for(let i =0; i<results.data.length; i++) {
        colorObject[results.data[i][0].toString()] = {
            'L': results.data[i][1],
            'M': results.data[i][2],
            'S': results.data[i][3],
            'X': 0.4002 * results.data[i][1] + 0.7075 * results.data[i][2] + -0.0808 * results.data[i][3],
            'Y': -0.2263 * results.data[i][1] + 1.1653 * results.data[i][2] - 0.0457 * results.data[i][3],
            'Z': 0.000000 * results.data[i][1] + 0.000000 * results.data[i][2] + 0.9182 * results.data[i][3],
            'R': Math.round(gammaCorrect(Math.max(0, ((0.4002 * results.data[i][1] + 0.7075 * results.data[i][2] + -0.0808 * results.data[i][3]) * 3.2406 - (-0.2263 * results.data[i][1] + 1.1653 * results.data[i][2] - 0.0457 * results.data[i][3]) * 1.5372 - (0.000000 * results.data[i][1] + 0.000000 * results.data[i][2] + 0.9182 * results.data[i][3]) * 0.4986)))*255),
            'G': Math.round(gammaCorrect(Math.max(0, ((0.4002 * results.data[i][1] + 0.7075 * results.data[i][2] + -0.0808 * results.data[i][3]) * -0.9689 + (-0.2263 * results.data[i][1] + 1.1653 * results.data[i][2] - 0.0457 * results.data[i][3]) * 1.8758 + (0.000000 * results.data[i][1] + 0.000000 * results.data[i][2] + 0.9182 * results.data[i][3]) * 0.0415)))*255),
            'B': Math.round(gammaCorrect(Math.max(0, ((0.4002 * results.data[i][1] + 0.7075 * results.data[i][2] + -0.0808 * results.data[i][3]) * 0.0557 - (-0.2263 * results.data[i][1] + 1.1653 * results.data[i][2] - 0.0457 * results.data[i][3]) * 0.2040 + (0.000000 * results.data[i][1] + 0.000000 * results.data[i][2] + 0.9182 * results.data[i][3]) * 1.0570)))*255)
        }
    }

    function normalizeXYZ([X, Y, Z]) {
        if (Y === 0) return [0, 0, 0];
        const factor = 1.0 / Y;
        return [X * factor, Y * factor, Z * factor];
    }

    let XYZtoLab = (X,Y,Z) => {

        const Xn = 0.95047  // D65 reference white
        const Yn = 1.00000
        const Zn = 1.08883
        
        let x = X / Xn;
        let y = Y / Yn;
        let z = Z / Zn;
        
        const f = (t) =>
            t > 0.008856
                ? Math.cbrt(t)
                : (7.787 * t) + (16 / 116);
        
        const fx = f(x);
        const fy = f(y);
        const fz = f(z);
    
        const L = (116 * fy) - 16;
        const a = 500 * (fx - fy);
        const b = 200 * (fy - fz);
    
        return { L, a, b };
    }

    let NormalizedXYZ = normalizeXYZ([colorObject['450']['X'], colorObject['450']['Y'], colorObject['450']['Z']])
    console.log(NormalizedXYZ[0],NormalizedXYZ[1],NormalizedXYZ[2])

    console.log(colorObject['390']['B'])

    let spectrumContainer = document.querySelector('.spectrum-container')
    console.log(spectrumContainer)


    for(let i = 390; i <831; i++) {
        let wavelength = document.createElement('div')
        wavelength.classList.add('wavelength')
        wavelength.style.backgroundColor = 'rgb(' + colorObject[i.toString()]['R'] + ',' + colorObject[i.toString()]['G'] + ',' + colorObject[i.toString()]['B'] +')'
        wavelength.id = i.toString()
        wavelength.addEventListener('click', (e) => {
            let element = e.target
            let active = document.querySelectorAll('.active')
            if (active.length > 0) {
                active.classList.remove('.active')
            }
            let elementWavelength = parseInt(element.id)
            let oppositeWavelength = 550 - (elementWavelength - 550)
            let oppositeColor = document.getElementById(oppositeWavelength.toString())
            element.classList.add('.active')
            oppositeColor.classList.add('.active')
    
            let clickedColorBox = document.getElementById('clicked-color')
            let oppositeColorBox = document.getElementById('opposite-color')
    
            clickedColorBox.style.backgroundColor = element.style.backgroundColor
            oppositeColorBox.style.backgroundColor = oppositeColor.style.backgroundColor
        })
        spectrumContainer.appendChild(wavelength)
    }

  });

