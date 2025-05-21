// https://www.codewars.com/kata/57658bfa28ed87ecfa00058a/javascript
function pathFinder(maze) {
  if (maze.length === 1) return 0
  const matrix = maze.split('\n').map(i => i.split(''));
  const queue = [[0, 0]];
  const visited = new Set(['0,0']);
  const parentMap = new Map()

  while (queue.length > 0) {
    const cell = queue.shift();
    // If end found, return true
    if (cell[0] === matrix.length - 1 && cell[1] === matrix.length - 1) break;

    // Check each direction
    for (const [x, y] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
      const newCell = [cell[0] + x, cell[1] + y];
      if ( // If direction is valid
        (
          cell.every(i => i >= 0 && i < matrix.length)
          && matrix[cell[0]][cell[1]] !== "W"
          && !visited.has(`${newCell[0]},${newCell[1]}`)
        )
      ) {
        // add to visited list and push to queue
        visited.add(`${newCell[0]},${newCell[1]}`);
        parentMap.set(`${newCell[0]},${newCell[1]}`, cell)
        queue.push(newCell);
      }
    }
  }
  // If end found, return path length
  if (parentMap.has(`${matrix.length - 1},${matrix.length - 1}`)) {
    const path = []
    let head = parentMap.get(`${matrix.length - 1},${matrix.length - 1}`)
    while (head) {
      path.push(head)
      head = parentMap.get(`${head[0]},${head[1]}`)
    }
    return path.length
  }
  // If end not found, return false
  return false;
}

console.log(
  pathFinder(
    `.W.
.W.
...`
  )
);
