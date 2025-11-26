let gameFinished = false;

const gameboardDiv = document.querySelector(".gameboard-div");

const gameboard = (() => {
  let cells = ["", "", "", "", "", "", "", "", ""];

  function renderCells() {
    gameboardDiv.innerHTML = ``;
    cells.forEach((cell, index) => {
      let cellDiv = document.createElement("div");
      cellDiv.className = "cell-div";
      cellDiv.dataset.id = index;
      cellDiv.innerHTML = cell;
      gameboardDiv.appendChild(cellDiv);
    });
  }

  function handleClick(targetDiv, sign) {
    cells[targetDiv.dataset.id] = sign;
    renderCells();
  }

  return { cells, renderCells, handleClick };
})();

gameboard.renderCells();

gameboardDiv.addEventListener("click", (e) => {
  e.preventDefault();
  gameboard.handleClick(e.target, "x");
});
