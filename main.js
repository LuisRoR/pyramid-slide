var symbolElem = document.getElementById("chosen-symbol"); //reads in brick type element
var heightElem = document.getElementById("slider-height"); //reads in value of slider element
var outputElem = document.getElementById("show-height");   //reads in displayed height vaue

/**
 * drawPyramid
 *
 * Renders, in the HTML document, draw pyramid with the specified height and symbol
 */
function drawPyramid() {

    document.getElementById("pyramid").innerHTML = "";  // first, clear the old content
    outputElem.innerHTML = heightElem.value;  // Display the default slider value 
    var height = parseInt(heightElem.value);  // Conver height to an interger value

    // for each row....
    for (var row = 0; row < height; row++) {

        // Get shape of brick
        var brick = symbolElem.value;
        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");  
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
