// Kata: https://www.codewars.com/kata/534e01fbbb17187c7e0000c6/javascript

function spiralize(n) {
  const maxIndex = n - 1;
  const grid = new Array(n).fill(1).map(i => new Array(n).fill(1))

  for (let i = 1; i <= Math.floor(n / 2); i += 2) {
    doSpiral(grid, i, maxIndex - i)
  }
  console.log(grid)
  return grid
}

function doSpiral(grid, offset, lastIndex) {
  for (let i = offset - 1; i <= lastIndex; i++) {
    grid[offset][i] = 0;
  }

  for (let i = offset; i < lastIndex; i++) {
    grid[i][lastIndex] = 0;
  }

  for (let i = lastIndex; i >= offset; i--) {
    grid[lastIndex][i] = 0;
  }

  for (let i = lastIndex; i > offset + 1; i--) {
    grid[i][offset] = 0;
  }
}
