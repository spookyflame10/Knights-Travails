import knightMoves from "./travails";
import Knight from "./knight.svg";
const UI = (() => {
  let start = true;
  let travailed = false;
  let startSquare;
  let endSquare;
  function initialUI() {
    generateDOMboard();
    //initializeEventListeners();
  }
  let createKnight = () => {
    let knight = new Image();
    knight.src = Knight;
    knight.classList.add('knight');
    console.log(knight);
    return knight;
  };
  let getDataCell = (x, y) => {
    return document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
  };
  function travail(start, end){
    let path = knightMoves(start, end);
    for(let i=0; i<path.length; i++){
      let cell = getDataCell(path[i][0], path[i][1]);
      cell.classList.add('gray');
      cell.textContent= i;
      cell.appendChild(createKnight());
    }
    travailed=true;
  }
  function cellClicked(e) {
    if (travailed){
      clearBoard();
      travailed = false;
    }
    else if(start){
      e.target.textContent = "start";
      startSquare = [parseInt(e.target.dataset.x), parseInt(e.target.dataset.y)];
      start = false;
    } else {
      e.target.textContent = "End";
      console.log(endSquare);
      endSquare = [parseInt(e.target.dataset.x), parseInt(e.target.dataset.y)];
      travail(startSquare, endSquare);
      start = true;
    }
  }
  function initializeEventListeners() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => cell.addEventListener("click", cellClicked));
  }
  function clearBoard() {
    const boardContainer = document.querySelector(".board");
    boardContainer.innerHTML = "";
    generateDOMboard();
  }
  function generateDOMboard() {
    const boardContainer = document.querySelector(".board");
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        let cell = document.createElement("div");
        if (i % 2 === 0)
          j % 2 === 0
            ? cell.classList.add("white")
            : cell.classList.add("black");
        else
          j % 2 === 0
            ? cell.classList.add("black")
            : cell.classList.add("white");
        cell.dataset.originalColor = cell.classList;
        cell.classList.add("cell");
        cell.dataset.x = i;
        cell.dataset.y = j;
        cell.addEventListener("click", cellClicked);
        boardContainer.appendChild(cell);
      }
    }
  }
  return { initialUI };
})();
export default UI;
