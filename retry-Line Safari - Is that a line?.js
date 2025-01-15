// Kata: https://www.codewars.com/kata/59c5d0b0a25c8c99ca000237/javascript

function line(grid) {
  let x1;
  let x2;

  // find Xs
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] === "X") {
        if (!x1) {
          x1 = [row, col]
        } else {
          x2 = [row, col]
        }
      }
    }
  }

  let isValid = checkPath(grid, x1, "", [x1])
  isValid = isValid ? isValid : checkPath(grid, x2, "", [x2])
  return isValid
}


function checkPath(grid, pos, axis, aborts) {
  // if (aborts.some(i => (i[0] === pos[0] && i[1] === pos[1]))) return false;

  // If found X
  if (grid[pos[0]][pos[1]] === "X") {
    const final = finalScan(grid, [...aborts, pos])
    if (final && !aborts.some(i => (i[0] === pos[0] && i[1] === pos[1]))) return true;
  }


  // Update aborts
  aborts = [...aborts, pos]

  // Set up directions
  const up = [pos[0] - 1, pos[1]]
  const down = [pos[0] + 1, pos[1]]
  const left = [pos[0], pos[1] - 1]
  const right = [pos[0], pos[1] + 1]

  // get valid directions
  const isUp = isValidCell(grid, up, "y", aborts)
  const isDown = isValidCell(grid, down, "y", aborts)
  const isLeft = isValidCell(grid, left, "x", aborts)
  const isRight = isValidCell(grid, right, "x", aborts)

  // Found indicator
  let isFound = false;

  // check what kind it is
  if (grid[pos[0]][pos[1]] === "+") {
    // if ambiguous, return false
    if (axis === "x" && isUp && isDown) return false;
    if (axis === "y" && isLeft && isRight) return false;

    if (axis === "x") {
      let next = isUp ? up : isDown ? down : false;
      if (next && checkPath(grid, next, "y", aborts)) isFound = true;
    }

    if (axis === "y") {
      let next = isRight ? right : isLeft ? left : false;
      if (next && checkPath(grid, next, "x", aborts)) isFound = true;
    }
  }

  if (grid[pos[0]][pos[1]] === "-") {
    let next = isLeft ? left : isRight ? right : false;
    if (next && checkPath(grid, next, "x", aborts)) isFound = true;
  }

  if (grid[pos[0]][pos[1]] === "|") {
    let next = isUp ? up : isDown ? down : false;
    if (next && checkPath(grid, next, "y", aborts)) isFound = true;
  }

  // if starting X
  const vAround = [isUp, isDown, isLeft, isRight].filter(i => i)
  if (grid[pos[0]][pos[1]] === "X" && vAround.length === 1) {

    let nextX = isRight ? right : isLeft ? left : false;
    let nextY = isUp ? up : isDown ? down : false

    if (nextX && checkPath(grid, nextX, "x", aborts)) isFound = true;
    if (nextY && checkPath(grid, nextY, "y", aborts)) isFound = true;
  }




  return isFound
}

function isValidCell(grid, next, axis, aborts) {
  // validate not out of bounds
  if (next[0] >= grid.length || next[0] < 0) return false;
  if (next[1] >= grid[next[0]].length || next[1] < 0) return false;

  // validate not in aborts
  if (aborts.some(i => (i[0] === next[0] && i[1] === next[1]))) return false;


  const cell = grid[next[0]][next[1]]

  // check if not a space
  if (cell === " ") return false;

  // Check if cell is valid based on direction to it.
  if (axis === "y") {
    if (cell === "-") return false
  }
  if (axis === "x") {
    if (cell === "|") return false
  }
  return true
}

function finalScan(grid, aborts){
  let isValid = true;

  // go through all of them and check whether an undiscovered cell is anything but " "
  for (let row = 0; row < grid.length; row++){
    for (let col = 0; col < grid[row].length; col++){
      const inAborts = aborts.some(i => (i[0] === row && i[1] === col))
      if (inAborts) continue;

      if (grid[row][col] !== " ") isValid = false;
    }
  }

  return isValid
}


console.log(

  line(
    [
      "           ",
      "X---------X",
      "           ",
      "           "
    ]
    // [
    //   "                      ",
    //   "   +-------+          ",
    //   "   |      +++---+     ",
    //   "X--+      +-+   X     "
    // ]
    // [
    //   "      +------+",
    //   "      |      |",
    //   "X-----+------+",
    //   "      |       ",
    //   "      X       ",
    // ]
  )
)