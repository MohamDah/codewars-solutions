// https://www.codewars.com/kata/5e417587e35dfb0036bd5d02/javascript
function pathCounter(strings) {
  let fCell = [];
  // Find target cell
  for (let row = 0; row < strings.length; row++)
    for (let col = 0; col < strings[row].length; col++)
      if (strings[row][col] === "f") {
        fCell = [row, col];
        break;
      }

  const valArr = Array.from({ length: strings.length }, () => Array(strings[0].length).fill(-1));
  valArr[fCell[0]][fCell[1]] = 0;
  const bfs = [fCell];
  while (bfs.length > 0) {
    const currCell = bfs.shift();

    for (let dir of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
      // Check direction and wrap
      let row = currCell[0] + dir[0];
      if (row >= strings.length || row < 0)
        row = (row % strings.length + strings.length) % strings.length;
      let col = currCell[1] + dir[1];
      if (col >= strings[row].length || col < 0)
        col = (col % strings[row].length + strings[row].length) % strings[row].length;

      if (strings[row][col] === "f") continue;

      const prevNextCell = getNextCell(strings, [row, col]);
      if (prevNextCell.join(",") === currCell.join(",")) {
        if (valArr[row][col] === -1) {
          valArr[row][col] = valArr[currCell[0]][currCell[1]] + 1;
          bfs.push([row, col]);
        }
      }
    }
  }
  return valArr;
}

const getNextCell = (strings, cell) => {
  let row = cell[0];
  let col = cell[1];

  switch (strings[cell[0]][cell[1]]) {
    case "r":
      col += 1;
      break;
    case "d":
      row += 1;
      break;
    case "l":
      col -= 1;
      break;
    case "u":
      row -= 1;
      break;
    default:
      return false;
  }

  if (row >= strings.length || row < 0)
    row = (row % strings.length + strings.length) % strings.length;
  if (col >= strings[row].length || col < 0)
    col = (col % strings[row].length + strings[row].length) % strings[row].length;
  return [row, col];
};



console.time("timer");
console.log(
  pathCounter(
    // ["rdfrd",
    //   "uluul"]
    [
      `dfllllll`,
      `drrurrdu`,
      `rrlruldu`,
      `rrrrrrru`
    ]
    // ["lfl"]
    // [
    //   'dfllllll',
    //   'drrurrdu',
    //   'rrlruldu',
    //   'rrrrrrru'
    // ]

    // [
    //   `lllllllllllld`,
    //   `uflllllrudlld`,
    //   `ullrullllllrd`,
    //   `ulllllllrulll`,
    // ]
  )
);

console.timeEnd("timer");
