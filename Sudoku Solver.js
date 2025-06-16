// https://www.codewars.com/kata/5296bc77afba8baa690002d7/javascript

function sudoku(puzzle) {
  // Find empty cell
  let cell = null;
  all: for (let row = 0; row < puzzle.length; row++) {
    for (let col = 0; col < puzzle.length; col++) {
      if (puzzle[row][col] !== 0)
        continue;

      cell = [row, col];
      break all;
    }
  }

  // If all cells are filled, puzzle is solved.
  if (!cell) return puzzle;

  // Try every possiblilty and continue recursively
  const [row, col] = cell;
  for (let i = 1; i <= 9; i++) {
    puzzle[row][col] = i;
    if (checkRow(puzzle, [row, col]) && checkCol(puzzle, [row, col]) && checkBlock(puzzle, [row, col])) {
      const recRes = sudoku(puzzle);
      if (!recRes) {
        puzzle[row][col] = 0;
        continue;
      } else {
        return puzzle;
      }
    } else {
      puzzle[row][col] = 0;
    }
  }

  return false;
}

// Helper functions to check validity
function checkRow(puzzle, cell) {
  const num = puzzle[cell[0]][cell[1]];
  const row = puzzle[cell[0]];
  return row.every((i, idx) => idx === cell[1] || i !== num);
}
function checkCol(puzzle, cell) {
  const num = puzzle[cell[0]][cell[1]];
  const col = puzzle.map(i => i[cell[1]]);
  return col.every((i, idx) => idx === cell[0] || i !== num);
}
function checkBlock(puzzle, cell) {
  const rowStart = Math.floor(cell[0] / 3) * 3;
  const colStart = Math.floor(cell[1] / 3) * 3;
  const block = [];
  for (let row = rowStart; row < rowStart + 3; row++) {
    for (let col = colStart; col < colStart + 3; col++) {
      if (row !== cell[0] || col !== cell[1])
        block.push(puzzle[row][col]);
    }
  }

  const num = puzzle[cell[0]][cell[1]];
  return block.every((i, idx) => i !== num);
}
console.log(sudoku([
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
]));
