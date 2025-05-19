// https://www.codewars.com/kata/5765870e190b1472ec0022a2/javascript
function pathFinder(maze) {
  const matrix = maze.split('\n').map(i => i.split(''));
  const queue = [[0, 0]];
  const visited = new Set(['0,0']);

  while (queue.length > 0) {
    const cell = queue.shift();
    // If end found, return true
    if (cell => cell[0] === matrix.length - 1 && cell[1] === matrix.length - 1) return true;

    // Check each direction
    for (const [x, y] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
      const newCell = [cell[0] + x, cell[1] + y];
      if ( // If direction is valid
        (
          cell.some(i => i < 0 || i > matrix.length - 1)
          || matrix[cell[0]][cell[1]] === "W"
          || visited.has(`${cell[0]},${cell[1]}`)
        )
      ) {
        // add to visited list and push to queue
        visited.add(`${newCell[0]},${newCell[1]}`);
        queue.push(newCell);
      }
    }
  }
  // If end not found, return false
  return false;
}

console.log(
  pathFinder(
    `.W.
.W.
...`

    //     `.W.
    // .W.
    // W..`
  )
);
