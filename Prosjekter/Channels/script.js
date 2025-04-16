function getPixelValue(img, x, y) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;


    var context = canvas.getContext("2d");
    context.drawImage(img, 0, 0);

    var imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    // Now you can access pixel data from imageData.data.
    // It's a one-dimensional array of RGBA values.
    // Here's an example of how to get a pixel's color at (x,y)
    var index = (y*imageData.width + x) * 4;
    var red = imageData.data[index];
    var green = imageData.data[index + 1];
    var blue = imageData.data[index + 2];
    var alpha = imageData.data[index + 3];

    value = [red, green, blue, alpha]

    return value
}

function getNumPixels(img, numRows) {
    console.log(img.width, img.height)
    return img.width * numRows
}


function rgba(r,g,b,a) {
    return 'rgba(' + [(r||0),(g||0),(b||0),(a||255)].join(',') + ')';
}

let image = document.getElementById("image")
getNumPixels(image)
let colorDisplay = document.getElementById("color-display")



let pixel = getPixelValue(image, 0, 0)
console.log(pixel)

colorDisplay.style.backgroundColor = rgba(pixel[0], pixel[1], pixel[2],pixel[3])

function draw(img) {

    let container = document.getElementById("pContainer")
    let row = document.getElementById("row1")
    xIterator = 0
    yIterator = 0

    let numPixels = getNumPixels(img, 1)
    
    for(let i = 0; i<numPixels; i++) {
        pixel = getPixelValue(img, xIterator, yIterator)

        let newPixel = document.createElement("div")
        newPixel.classList.add("pixel")
        newPixel.style.backgroundColor = rgba(pixel[0], pixel[1], pixel[2],pixel[3])
        row.appendChild(newPixel)

        xIterator++

        if(xIterator == img.width) {
            row = document.createElement("div")
            row.classList.add("pixel-row")
            container.appendChild(row)
            xIterator = 0
            yIterator++
        }      
    }
}

console.log(colorDisplay.style.backgroundColor)

draw(image)
