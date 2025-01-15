function line(grid) {
  let start = "";
  let first = "";

  // find start X
  all: for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "X") {
        // start = `${row}${col}`;
        start = [row, col]

        for (let n of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
          if (
            grid.length > row + n[0] > -1 &&
            grid[row].length > col + n[1] > -1 &&
            grid[row + n[0]][col + n[1]] !== " "
          ) {
            // first = `${row + n[0]},${col + n[1]}`
            first = [row + n[0], col + n[1]]
            break;
          }
        }

        break all;
      }
    }
  }

  const isFound = lookaround(grid, first, start, [start])
  if (isFound) return true
  return false;
}

function lookaround(grid, pos, last, aborts) {
  if (!aborts.some(i => i[0] === pos[0] && i[1] === pos[1]) && grid[pos[0]][pos[1]] === "X") {
    return true
  }
  aborts = [...aborts]
  const up = [pos[0] - 1, pos[1]]
  const down = [pos[0] + 1, pos[1]]
  const left = [pos[0], pos[1] - 1]
  const right = [pos[0], pos[1] + 1]
  let isFound = false;

  
  if (grid[pos[0]][pos[1]] === "+") {
    aborts.push(pos)
    if (pos[0] === last[0]) {
      console.log(aborts, pos);
      if (!(isValid(grid, left, last, aborts) || isValid(grid, right, last, aborts))){

        [up, down].forEach(dir => {
          if (!isValid(grid, dir, last, aborts)) return
          
          if (grid[dir[0]][dir[1]] === "-") return
          
          if (lookaround(grid, dir, pos, aborts)) isFound = true
        })
      }
    }
    else if (pos[1] === last[1]) {
      if (!(isValid(grid, up, last, aborts) || isValid(grid, down, last, aborts))){
        [left, right].forEach(dir => {
          if (!isValid(grid, dir, last, aborts)) return
          
          if (grid[dir[0]][dir[1]] === "|") return
          
          
          if (lookaround(grid, dir, pos, aborts)) isFound = true
        })
      }
    }
  }

  if (grid[pos[0]][pos[1]] === "-") {
    [right, left].forEach(dir => {
      // console.log(dir, aborts)
      if (!isValid(grid, dir, last, aborts)) return

      if (grid[dir[0]][dir[1]] === "|") return

      if (lookaround(grid, dir, pos, aborts)) isFound = true
    })
  }

  if (grid[pos[0]][pos[1]] === "|") {
    [up, down].forEach(dir => {
      if (!isValid(grid, dir, last, aborts)) return

      if (grid[dir[0]][dir[1]] === "-") return

      if (lookaround(grid, dir, pos, aborts)) isFound = true

    })
  }

  if (isFound) {
    return true
  }

  return false
}

function isValid(grid, pos, last, aborts) {
  if (pos[0] === last[0] && pos[1] === last[1]) return false;

  if (!(grid.length > +pos[0] && pos[0] > -1 && grid[pos[0]].length > +pos[1] && pos[1] > -1)) return false;

  // console.log(pos,aborts.some(i => i[0] === pos[0] && i[1] === pos[1]))
  if ((grid[pos[0]][pos[1]] === " " || aborts.some(i => i[0] === pos[0] && i[1] === pos[1]))) return false;

  return true;
}



console.log(

  line(
    // [
    //   "           ",
    //   "X---------X",
    //   "           ",
    //   "           "
    // ]
    [
      "                      ",
      "   +-------+          ",
      "   |      +++---+     ",
      "X--+      +-+   X     "
    ]
    // [
    //   "      +------+",
    //   "      |      |",
    //   "X-----+------+",
    //   "      |       ",
    //   "      X       ",
    // ]
  )
)
