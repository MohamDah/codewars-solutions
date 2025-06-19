// https://www.codewars.com/kata/5671d975d81d6c1c87000022/javascript

const colClueIdx = [
  [0, 1, 2, 3],
  [11, 10, 9, 8]
];
const rowClueIdx = [
  [15, 14, 13, 12],
  [4, 5, 6, 7]
];

function solvePuzzle(clues) {
  const grid = Array.from({ length: 4 }, () => [0, 0, 0, 0]);
  const solved = solver(grid, clues);
  return solved;
}

function solver(grid, clues) {
  let cell = null;
  all: for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid.length; col++) {
      if (grid[row][col] !== 0) continue;

      cell = [row, col];
      break all;
    }
  }
  if (!cell) return grid;

  const [row, col] = cell;
  for (let i = 1; i <= grid.length; i++) {
    grid[row][col] = i;
    if (isValid(grid, cell, clues)) {
      const isFinished = solver(grid, clues);
      if (!isFinished) {
        grid[row][col] = 0;
        continue;
      } else {
        return grid;
      }
    } else {
      grid[row][col] = 0;
    }
  }
  return false;
}

function isValid(grid, [row, col], clues) {
  // Check if height is unique
  const isRowUnique = grid[row].every((i, idx) => idx === col || i !== grid[row][col]);
  const isColUnique = grid.map(i => i[col]).every((i, idx) => idx === row || i !== grid[row][col]);
  if (!isRowUnique || !isColUnique) return false;

  let isValid = true;

  // check row
  const rowArr = [...grid[row]];
  isValid = checkDir(rowArr, clues[rowClueIdx[0][row]]);
  if (!isValid) return false;

  // check row reverse
  const revRowArr = [...grid[row]].reverse();
  isValid = checkDir(revRowArr, clues[rowClueIdx[1][row]]);
  if (!isValid) return false;

  // check col
  const colArr = grid.map(r => r[col]);
  isValid = checkDir(colArr, clues[colClueIdx[0][col]]);
  if (!isValid) return false;

  // check col reverse
  const revColArr = [...colArr].reverse();
  isValid = checkDir(revColArr, clues[colClueIdx[1][col]]);
  if (!isValid) return false;

  return true;
}

function checkDir(arr, clue) {
  if (clue === 0 || arr.includes(0)) return true;
  let visible = 0;
  let highest = 0;
  for (let sky of arr) {
    if (sky > highest) {
      visible += 1;
      highest = sky;
    }
  }
  return visible === clue;
}

console.log(
  solvePuzzle([
    0, 0, 1, 2,
    0, 2, 0, 0,
    0, 3, 0, 0,
    0, 1, 0, 0
  ])
);