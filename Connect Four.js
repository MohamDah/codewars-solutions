// https://www.codewars.com/kata/56882731514ec3ec3d000009/
function whoIsWinner(piecesPositionList) {
  const board = Array.from({ length: 7 }, () => []);
  const keyToIdx = { "A": 0, "B": 1, "C": 2, "D": 3, "E": 4, "F": 5, "G": 6 };
  for (let i of piecesPositionList) {
    const [key, player] = i.split("_");
    board[keyToIdx[key]].push(player);

    // Match col
    const resCol = checkRow(board[keyToIdx[key]]);
    if (resCol)
      return resCol;

    // Match row
    const rowIdx = board[keyToIdx[key]].length - 1;
    const row = board.map(i => i[rowIdx]);
    const resRow = checkRow(row);
    if (resRow)
      return resRow;

    // Match diagonal
    let resDiag = checkDiag(board, [keyToIdx[key], board[keyToIdx[key]].length - 1]);
    if (resDiag)
      return resDiag;

    // Match opposite diagonal
    const currCol = board[keyToIdx[key]];
    const revBoard = [...board].reverse();
    resDiag = checkDiag(revBoard, [revBoard.indexOf(currCol), currCol.length - 1]);
    if (resDiag)
      return resDiag;
  }
  return "Draw";
}

function checkRow(row) {
  let ySeq = 0;
  let rSeq = 0;
  for (let i of row) {
    // Whichever reaches 4 consecutives first returns
    i === "Yellow" ? ySeq++ : ySeq = 0;
    if (ySeq === 4)
      return "Yellow";

    i === "Red" ? rSeq++ : rSeq = 0;
    if (rSeq === 4)
      return "Red";
  }
  return false;
}

function checkDiag(board, cell) {
  let onCell = [cell[0] - 1, cell[1] - 1];
  let seq = [board[cell[0]][cell[1]]];
  while (onCell[0] >= 0 && onCell[1] >= 0) {
    seq.unshift(board[onCell[0]][onCell[1]]);
    onCell = [onCell[0] - 1, onCell[1] - 1];
  }

  onCell = [cell[0] + 1, cell[1] + 1];
  while (onCell[0] <= 6 && onCell[1] < 6) {
    seq.push(board[onCell[0]][onCell[1]]);
    onCell = [onCell[0] + 1, onCell[1] + 1];
  }
  return checkRow(seq);
}

console.log(
  whoIsWinner(
    // ["A_Red",
    //   "B_Yellow",
    //   "A_Red",
    //   "B_Yellow",
    //   "A_Red",
    //   "B_Yellow",
    //   "G_Red",
    //   "B_Yellow"]
    // [
    //   'C_Yellow', 'E_Red', 'G_Yellow',
    //   'B_Red', 'D_Yellow', 'B_Red',
    //   'B_Yellow', 'G_Red', 'C_Yellow',
    //   'C_Red', 'D_Yellow', 'F_Red',
    //   'E_Yellow', 'A_Red', 'A_Yellow',
    //   'G_Red', 'A_Yellow', 'F_Red',
    //   'F_Yellow', 'D_Red', 'B_Yellow',
    //   'E_Red', 'D_Yellow', 'A_Red',
    //   'G_Yellow', 'D_Red', 'D_Yellow',
    //   'C_Red'
    // ]
    // [
    //   'B_Red', 'F_Yellow', 'A_Red',
    //   'F_Yellow', 'D_Red', 'A_Yellow',
    //   'B_Red', 'C_Yellow', 'B_Red',
    //   'G_Yellow', 'D_Red', 'G_Yellow',
    //   'D_Red', 'E_Yellow', 'G_Red',
    //   'A_Yellow', 'E_Red', 'E_Yellow',
    //   'A_Red', 'A_Yellow', 'E_Red',
    //   'B_Yellow', 'E_Red', 'C_Yellow',
    //   'B_Red', 'D_Yellow', 'E_Red'
    // ]
    // [
    //   'G_Red', 'F_Yellow', 'B_Red',
    //   'A_Yellow', 'A_Red', 'F_Yellow',
    //   'C_Red', 'C_Yellow', 'F_Red',
    //   'G_Yellow', 'C_Red', 'G_Yellow',
    //   'G_Red', 'E_Yellow', 'A_Red',
    //   'C_Yellow', 'B_Red', 'G_Yellow',
    //   'E_Red', 'F_Yellow', 'D_Red',
    //   'D_Yellow', 'D_Red', 'B_Yellow',
    //   'G_Red'
    // ]
    [
      'F_Red', 'D_Yellow', 'G_Red',
      'G_Yellow', 'D_Red', 'D_Yellow',
      'B_Red', 'D_Yellow', 'B_Red',
      'D_Yellow', 'C_Red', 'A_Yellow',
      'A_Red', 'E_Yellow', 'E_Red',
      'C_Yellow', 'A_Red', 'A_Yellow',
      'G_Red', 'B_Yellow', 'B_Red',
      'E_Yellow', 'G_Red', 'A_Yellow',
      'G_Red', 'B_Yellow', 'D_Red'
    ]
  )
);