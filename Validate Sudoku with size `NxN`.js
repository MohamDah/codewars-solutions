// https://www.codewars.com/kata/540afbe2dc9f615d5e000425
var Sudoku = function (data) {
  let preValid = true;

  // Check if grid is valid
  if (
    typeof data !== "object"
    || data.some(i => typeof i !== "object")
    || data.some(i => i.length !== data.length)
  ) preValid = false;

  // Check if square root is integer
  const sqrt = Math.sqrt(data.length)
  if (preValid && !Number.isInteger(sqrt)) preValid = false;

  // Rotate grid, turning columns to row to make it easier to scan
  const rotated = []
  if (preValid) {
    top: for (let row = 0; row < data.length; row++) {
      for (let col = 0; col < data[row].length; col++) {
        // If a cell is not a number, or number is out of valid range, invalidate and break
        if (
          typeof data[row][col] !== "number" 
          || data[row][col] <= 0 
          || data[row][col] > data.length
        ) {
          preValid = false;
          break top;
        }
        // enter cells to rotated grid
        if (rotated[col]) {
          rotated[col].push(data[row][col])
        } else {
          rotated[col] = [data[row][col]]
        }
      }
    }
  }

  // If any row or column has duplicates, invalidate
  if (data.some(i => [...new Set(i)].length !== i.length)) preValid = false
  if (rotated.some(i => [...new Set(i)].length !== i.length)) preValid = false

  if (preValid) {
    // Get each "box" in the grid, and store them in arrays in a Map
    const boxes = new Map()
    for (let row = 0; row < data.length; row++) {
      for (let col = 0; col < data.length; col++) {
        const pos = `${Math.floor(row / sqrt)}${Math.floor(col / sqrt)}`
        if (boxes.get(pos)) {
          boxes.get(pos).push(data[row][col])
        } else {
          boxes.set(pos, [data[row][col]])
        }
      }
    }
    // Go through each box, and check for duplicates
    for (let [k, v] of boxes) {
      // If duplicates, invalidate and break
      if ([...new Set(v)].length !== v.length) {
        preValid = false
        break
      }
    }
  }

  return {
    isValid: function () {
      // Grid is validated at object construction, so just return preValid
      return preValid;
    }
  };
};

// Sudoku([
//   [
//     [
//       1, 2, 3, 4, 5,
//       6, 7, 8, 9
//     ],
//     [
//       2, 3, 1, 5, 6,
//       4, 8, 9, 7
//     ],
//     [
//       3, 1, 2, 6, 4,
//       5, 9, 7, 8
//     ],
//     [
//       4, 5, 6, 7, 8,
//       9, 1, 2, 3
//     ],
//     [
//       5, 6, 4, 8, 9,
//       7, 2, 3, 1
//     ],
//     [
//       6, 4, 5, 9, 7,
//       8, 3, 1, 2
//     ],
//     [
//       7, 8, 9, 1, 2,
//       3, 4, 5, 6
//     ],
//     [
//       8, 9, 7, 2, 3,
//       1, 5, 6, 4
//     ],
//     [
//       9, 7, 8, 3, 1,
//       2, 6, 4, 5
//     ]
//   ]
// ])