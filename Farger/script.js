function rgb(r,g,b) {
    return 'rgb(' + [(r||0),(g||0),(b||0)].join(',') + ')';
}

$(document).ready(function () {
    let csvPath = './farger.csv'; // Path to your CSV file

    // Use AJAX to load the CSV file content
    $.ajax({
        url: csvPath,
        dataType: 'text',
        success: function (data) {
            // Parse the CSV content into objects
            let colorObjects = $.csv.toObjects(data);
            console.log(colorObjects[0].r)

            let container = document.getElementById("cc1")
            let cText = document.getElementById("color-text")

            for(let i=0; i<colorObjects.length; i++) {
                let r = parseInt(colorObjects[i].r)
                let g = parseInt(colorObjects[i].g)
                let b = parseInt(colorObjects[i].b)

                let colorBox = document.createElement('div')

                let width = (100/colorObjects.length).toString()

                colorBox.style.backgroundColor = rgb(r,g,b)
                colorBox.style.width = width + 'vw'
                colorBox.classList.add('colorBox')
                container.appendChild(colorBox)

                

                colorBox.addEventListener("click", () => {
                    cText.innerHTML = 'rgb(' + r + ',' + g + ',' + b + ')'
                })
            }
        },
        error: function (xhr, status, error) {
            console.error("Failed to load the CSV file:", error);
        },
    });

    csvPath = './farger2.csv';
    $.ajax({
        url: csvPath,
        dataType: 'text',
        success: function (data) {
            // Parse the CSV content into objects
            colorObjects = 0
            colorObjects = $.csv.toObjects(data);
            console.log(colorObjects[0].r)

            let container = document.getElementById("cc2")
            let cText = document.getElementById("color-text")

            for(let i=colorObjects.length/2; i<colorObjects.length; i++) {
                let r = parseInt(colorObjects[i].r)
                let g = parseInt(colorObjects[i].g)
                let b = parseInt(colorObjects[i].b)

                let colorBox = document.createElement('div')

                let width = (100 * 2/colorObjects.length).toString()

                colorBox.style.backgroundColor = rgb(r,g,b)
                colorBox.style.width = width + 'vw'
                colorBox.classList.add('colorBox')
                container.appendChild(colorBox)

                

                colorBox.addEventListener("click", () => {
                    cText.innerHTML = 'rgb(' + r + ',' + g + ',' + b + ')'
                })
            }
        },
        error: function (xhr, status, error) {
            console.error("Failed to load the CSV file:", error);
        },
    });

    csvPath = './farger3.csv';
    $.ajax({
        url: csvPath,
        dataType: 'text',
        success: function (data) {
            // Parse the CSV content into objects
            let colorObjects = $.csv.toObjects(data);
            console.log(colorObjects[0].r)

            let container = document.getElementById("cc3")
            let cText = document.getElementById("color-text")

            for(let i=2*colorObjects.length/3; i<colorObjects.length; i++) {
                let r = parseInt(colorObjects[i].r)
                let g = parseInt(colorObjects[i].g)
                let b = parseInt(colorObjects[i].b)

                let colorBox = document.createElement('div')

                let width = (100 * 3/colorObjects.length).toString()

                colorBox.style.backgroundColor = rgb(r,g,b)
                colorBox.style.width = width + 'vw'
                colorBox.classList.add('colorBox')
                container.appendChild(colorBox)

                

                colorBox.addEventListener("click", () => {
                    cText.innerHTML = 'rgb(' + r + ',' + g + ',' + b + ')'
                })
            }
        },
        error: function (xhr, status, error) {
            console.error("Failed to load the CSV file:", error);
        },
    });
});
