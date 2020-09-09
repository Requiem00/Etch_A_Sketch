var button = document.querySelector("#reset");
var container = document.querySelector("#container");
var containerWidth = container.offsetWidth;

button.addEventListener("click", function () {
    container.innerHTML = " ";
    button.innerText = "Reset the Grid";
    createGrid();
})

function createGrid() {
    var gridSquares = parseInt(prompt("How many squares do you want in the grid ?"));
    for (i = 0; i < gridSquares; i++) {
        var row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        for (j = 0; j < gridSquares; j++) {
            var column = document.createElement("div");
            column.className = "column";
            row.appendChild(column);
            var containerHeight = container.offsetHeight;
            column.style.width = containerWidth / gridSquares;
            column.style.height = containerHeight / gridSquares;
            column.addEventListener("mouseover", function () {
                this.style.background = getRandomColor();
            })
        }
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}