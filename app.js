const gameboardDiv = document.querySelector(".gameboard-div");
const renderButton = document.getElementById("render-button");

const gameboard = (() => {
    let cells = ["", "", "", "", "", "", "", "", ""];

    const renderCells = () => {
        gameboardDiv.innerHTML = ``;
        cells.forEach((cell, index) => {
            let cellDiv = document.createElement("div");
            cellDiv.className = "cell-div";
            cellDiv.id = index;
            cellDiv.innerHTML = cell;
            gameboardDiv.appendChild(cellDiv);
        });
    };

    return { cells, renderCells };
})();

renderButton.addEventListener("click", () => {
    gameboard.renderCells();
});
