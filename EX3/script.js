document.addEventListener("DOMContentLoaded", function () {
    // Get all the cells in the table
    var cells = document.querySelectorAll("#colorTable td");

    // Add mouseover event listeners to change cell content on hover
    cells.forEach(function (cell) {
        cell.addEventListener("mouseover", function () {
            var color = cell.getAttribute("color");
            cell.style.backgroundColor = color;
            cell.innerHTML = color;
        });

        // Add mouseout event listeners to revert cell content on mouseout
        cell.addEventListener("mouseout", function () {
            cell.style.backgroundColor = "";
            cell.innerHTML = cell.getAttribute("color");
        });
    });
});
