let grid = [];
const cols = [
  [0, 1, 2, 3],
  [11, 10, 9, 8]
]
const rows = [
  [15, 14, 13, 12],
  [4, 5, 6, 7]
]
function solvePuzzle(clues) {
  grid = [
    [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]],
    [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]],
    [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]],
    [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]]
  ];

  // while (!grid.every(r => r.every(c => typeof c === "number"))){
  for (let i in [1, 2, 3, 4]){

    for (let row in grid){
      row = +row
      for (let col in grid[row]){
        col = +col
        if (typeof grid[row][col] === 'object'){
          edgeOnes(clues, row, col)
          edgeOther(clues, row, col)
          checkColForUnique(row, col)
          innerCells(clues, row, col)
        }
      }
    }
  }
  console.log(grid);
  
  return grid
}




function cleanUpCol(colIndex, rowIndex, remNum){
  grid.forEach((row, ind) => {
    if (ind !== rowIndex && typeof row[colIndex] !== "number"){
      let numInd = row[colIndex].indexOf(remNum)
      if (numInd >= 0){
        row[colIndex].splice(numInd, 1)
      }
    }
  })
}


function cleanUpRow(row, colIndex, remNum){
  row.forEach((cell, ind) => {
    if (ind !== colIndex && typeof cell !== "number"){
      let numInd = cell.indexOf(remNum)
      if (numInd >= 0){
        cell.splice(numInd, 1)
      }
    }
  })
}


// turn edge cell to 4 if clue is 1
function edgeOnes(clues, row, col){
  const top = cols[0][col]
  const bottom = cols[1][col]
  const left = rows[0][row]
  const right = rows[1][row]
  if (row === 0){
    if (clues[top] === 1){
      grid[row][col] = 4
      cleanUpRow(grid[row], col, 4)
      cleanUpCol(col, row, 4)
    }
  } else if (row === 3){
    if (clues[bottom] === 1){
      grid[row][col] = 4
      cleanUpRow(grid[row], col, 4)
      cleanUpCol(col, row, 4)
    }
  }
  
  
  if (col === 0){
    if (clues[left] === 1){
      grid[row][col] = 4
      cleanUpRow(grid[row], col, 4)
      cleanUpCol(col, row, 4)
    }
  } else if (col === 3) {
    if (clues[right] === 1){
      grid[row][col] = 4
      cleanUpRow(grid[row], col, 4)
      cleanUpCol(col, row, 4)
    }
  }
}

// remove number from cell
function removeNum(cell, num){
  if (typeof cell !== "number"){
    let numInd = cell.indexOf(num)
    if (numInd >= 0){
      cell.splice(numInd, 1)
    }
  }
}

// check the edge cells for cases where clue is not one
function edgeOther(clues, row, col){
  const top = cols[0][col]
  const bottom = cols[1][col]
  const left = rows[0][row]
  const right = rows[1][row]
  
  // check if top row clue greater than 1 and remove four from cell,
  // if clue is greater than 2, remove 3
  if (row === 0){
    if (clues[top] > 1){
      let cell = grid[row][col]
      removeNum(cell, 4)
      clues[top] > 2 && removeNum(cell, 3)
    }
    if (clues[top] === 2 && grid[3][col] === 4){
      grid[row][col] = 3;
      cleanUpRow(grid[row], col, 3)
      cleanUpCol(col, row, 3)
    }

    if (clues[top] === 2 && grid[2][col] === 4){
      removeNum(grid[row][col], 1)
    }
  } else if (row === 3){

    // check bottom row
    if (clues[bottom] > 1){
      let cell = grid[row][col]
      removeNum(cell, 4)
      clues[bottom] > 2 && removeNum(cell, 3)
    }
    if (clues[bottom] === 2 && grid[0][col] === 4){
      grid[row][col] = 3;
      cleanUpRow(grid[row], col, 3)
      cleanUpCol(col, row, 3)
    }

    if (clues[bottom] === 2 && grid[1][col] === 4){
      removeNum(grid[row][col], 1)
    }
  }
  
  // check left column
  if (col === 0){
    if (clues[left] > 1){
      let cell = grid[row][col]
      removeNum(cell, 4)
      clues[left] > 2 && removeNum(cell, 3)
    }
    if (clues[left] === 2 && grid[row][3] === 4){
      grid[row][col] = 3;
      cleanUpRow(grid[row], col, 3)
      cleanUpCol(col, row, 3)
    }

    if (clues[left] === 2 && grid[row][2] === 4){
      removeNum(grid[row][col], 1)
    }
  } else if (col === 3) {

    // check right column
    if (clues[right] > 1){
      let cell = grid[row][col]
      removeNum(cell, 4)
      clues[right] > 2 && removeNum(cell, 3)
    }
    if (clues[right] === 2 && grid[row][0] === 4){
      grid[row][col] = 3;
      cleanUpRow(grid[row], col, 3)
      cleanUpCol(col, row, 3)
    }

    if (clues[right] === 2 && grid[row][1] === 4){
      removeNum(grid[row][col], 1)
    }
  }
}

// Find if a column has a cell with a number that doesn't exist in other cells
function checkColForUnique(row, col){
  const cell = grid[row][col]
  for (let i in cell){
    for (let j = 0; j < 4; j++){
      if (typeof grid[j][col] !== "number" && grid[j][col] !== cell){
        if (grid[j][col].some(n => n === cell[i])){
          break;
        }
      }
      if (j === 3){
        grid[row][col] = cell[i]
        cleanUpRow(grid[row], col, cell[i])
        break;
      }

    }
  }
}

// Find if a row has a cell with a number that doesn't exist in other cells
function checkRowForUnique(row, col){
  const cell = grid[row][col]
  for (let i in cell){
    for (let j in grid[row]){
      if (typeof grid[row][j] !== "number" && grid[row][j] !== cell){
        if (grid[row][j].some(n => n === cell[i])){
          break;
        }
      }
      if (j === 3){
        grid[row][col] = cell[i]
        cleanUpCol(col, row, cell[i])
        break;
      }
    }
  }
}


// check for the inner cells
function innerCells(clues, row, col){
  const top = cols[0][col]
  const bottom = cols[1][col]
  const left = rows[0][row]
  const right = rows[1][row]

  // if inner cell and clue next to it equals 2 means cell can't be 3.
  if (row === 1 && clues[top] === 2){
    removeNum(grid[row][col], 3)
  }
  
  if (row === 2 && clues[bottom] === 2){
    removeNum(grid[row][col], 3)
  }

  if (col === 1 && clues[left] === 2){
    removeNum(grid[row][col], 3)
  }

  if (col === 2){
    if (clues[right] === 2){
      removeNum(grid[row][col], 3)
    }
  }
}

solvePuzzle([
  2, 2, 1, 3,
  2, 2, 3, 1,
  1, 2, 2, 3,
  3, 2, 1, 3
])

// [[1, 3, 4, 2], [4, 2, 1, 3], [3, 4, 2, 1], [2, 1, 3, 4]];