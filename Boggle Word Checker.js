// https://www.codewars.com/kata/57680d0128ed87c94f000bfd/javascript
function checkWord(board, word) {
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === word[0]) {
        if (word.length === 1) {
            return true
        }
        const usedCells = new Set()
        usedCells.add([row, col].join(","))
        const result = solver(board, [row, col], word.slice(1), usedCells)
        if (result) {
            return true
        }
      }
    }
  }
  return false
}

function solver(board, [row, col], remWord, usedCells) {
  for (let [nRow, nCol] of [
    [row + 1, col],
    [row + 1, col + 1],
    [row, col + 1],
    [row - 1, col + 1],
    [row - 1, col],
    [row - 1, col - 1],
    [row, col - 1],
    [row + 1, col - 1]
  ]) {
    if (
      !usedCells.has([nRow, nCol].join(","))
      && nRow >= 0 && nRow < board.length
      && nCol >= 0 && nCol < board[nRow].length
      && board[nRow][nCol] === remWord[0]
    ) {
      if (remWord.length === 1) {
        return true
      }
      const newUsedCells = new Set(usedCells)
      newUsedCells.add([nRow, nCol].join(","))
      const result = solver(board, [nRow, nCol], remWord.slice(1), newUsedCells)

      if (result === true) {
        return true
      }
    }
  }
  return false
}

console.log(
    checkWord(
// [ ["I","L","A","W"],
//   ["B","N","G","E"],
//   ["I","U","A","O"],
//   ["A","S","R","L"] ],
//   "SINUS"
[
  [ 'E', 'A', 'R', 'A' ],
  [ 'N', 'L', 'E', 'C' ],
  [ 'I', 'A', 'I', 'S' ],
  [ 'B', 'Y', 'O', 'R' ]
]
    )
)