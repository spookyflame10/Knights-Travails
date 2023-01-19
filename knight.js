const Row = [2, 1, -1, -2, -2, -1, 1, 2];
const Col = [1, 2, 2, 1, -1, -2, -2, -1];
const visited = [...Array(8)].map(() => Array(8).fill(0));

function knightTravails(visited, row, col, move) {
  if (move == 64) {
    //when moves number are equal to boxes in chessboard
    console.log(visited);
    return true;
  } else {
    for (let i = 0; i < 8; i++) {
      //valuating eight possible steps for each box travelled
      let rowNew = row + Row[i]; //moving to next step row
      let colNew = col + Col[i]; //moving to next step column
      if (isValidMove(visited, rowNew, colNew)) {
        //if next move is valid
        visited[rowNew][colNew] = move; //setting the chessboard
        if (knightTravails(visited, rowNew, colNew, ++move)) {
          //if move is successful
          return true;
        }
        move--; //backtracking
        visited[rowNew][colNew] = 0;
      }
    }
  }
  return false;
}
function isValidMove(visited, rowNew, colNew) {
  if (
    rowNew >= 0 &&
    rowNew < 8 &&
    colNew >= 0 &&
    colNew < 8 &&
    visited[rowNew][colNew] == 0
  ) {
    return true;
  }
  return false;
}
console.log(knightTravails(visited, 0, 0, 1));
