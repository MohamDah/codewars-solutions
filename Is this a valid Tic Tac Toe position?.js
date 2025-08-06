// https://www.codewars.com/kata/68582183cf16719a5ba943df/javascript
function isValid(board) {
  const xCount = board.map(i => i.split("").filter(j => j === "X")).reduce((a, i) => a + i.length, 0);
  const oCount = board.map(i => i.split("").filter(j => j === "O")).reduce((a, i) => a + i.length, 0);

  if (!(xCount === oCount || xCount === oCount + 1)) 
    return false;

  const xWin = isWin(board, "X");
  const oWin = isWin(board, "O");
  if (
    (xWin && oWin)
    ||
    (xWin && xCount <= oCount)
    ||
    (oWin && xCount > oCount)
  ) return false;

  return true;
}

function isWin(board, sign) {
  for (let i = 0; i < 3; i++) {
    if (
      (sign === board[i][0] && sign === board[i][1] && sign === board[i][2])
      ||
      (sign === board[0][i] && sign === board[1][i] && sign === board[2][i])
    ) return true;
  }
  if (
    (sign === board[0][0] && sign === board[1][1] && sign === board[2][2])
    ||
    (sign === board[0][2] && sign === board[1][1] && sign === board[2][0])
  ) return true;

  return false;
}

console.log(
  isValid(
    // ["XOX","XOX","OXO"]
    // ["OOO","XX_","__X"]
    // ["OOX", "OX_", "X__"]
    [
      "__X",
      "_XX",
      "OOO"
    ]
  )
);