const Row = [2, 1, -1, -2, -2, -1, 1, 2];
const Col = [1, 2, 2, 1, -1, -2, -2, -1];
// function Move(current, path){
//     return {0: current,1: [path]};
// }
export default function knightMoves(start, end) {
  let queue = [[start, [start]]];
  while (!queue.length==0) {
    const move = queue.shift();
    for (let i = 0; i < 8; i++) {//evaluating eight possible steps for each box travelled
      let newMove = [(move[0][0] + Row[i]), (move[0][1] + Col[i])];
      //checks if newMove is valid.
      if (newMove[0] >= 0 && newMove[0] < 8 && newMove[1] >= 0 && newMove[1] < 8) {
        if(newMove[0]==end[0]&&newMove[1]==end[1]){
            move[1].push(end);
            return move[1];
        }
        queue.push([[newMove[0], newMove[1]], [...move[1],newMove]]);
      }
    }
  }
  return false;
}
console.log(knightMoves([0, 0], [1, 2]));
console.log(knightMoves([0,0],[3,3]));
console.log(knightMoves([3,3],[0,0]));
console.log(knightMoves([3,3],[4,3]));