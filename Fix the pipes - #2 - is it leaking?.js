function checkPipe(map) {
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++){
      if (
        map[row][col] !== "." &&
        !checkDirection(map, row, col)
      ){
        return false;
      }
    }
    console.log(map)
  }
  return true;
}

function checkDirection(map, row, col){
  const canConnectDown = ["┓", "┏", "┃", "┣", "┫", "┳", "╋", undefined];
  const canConnectUp = ["┗", "┛", "┃", "┣", "┫", "┻", "╋", undefined]
  const canConnectLeft = ["┓", "┛", "━", "┫", "┳", "┻", "╋", undefined]
  const canConnectRight = ["┗", "┏", "━", "┣", "┳", "┻", "╋", undefined]
  const cell = map[row][col];

  let connects = 0;
  let disconnects = 0;

  if (canConnectDown.includes(cell)){
    if (!map[row + 1] || canConnectUp.includes(map[row + 1][col])){
      connects++
    } else disconnects++
  }

  if (canConnectUp.includes(cell)){
    if (!map[row - 1] || canConnectDown.includes(map[row - 1][col])){
      connects++
    } else disconnects++
  }

  if (canConnectRight.includes(cell)){
    if (canConnectLeft.includes(map[row][col + 1])){
      connects++
    } else disconnects++
  }

  if (canConnectLeft.includes(cell)){
    if (canConnectRight.includes(map[row][col - 1])){
      connects++
    } else disconnects++
  }

  if (connects === 0 || disconnects === 0){
    return true;
  }

  if (connects === 1 && (disconnects === 1 || disconnects === 3)){
    if ((map[row - 1] && map[row - 1][col] === "┓") || (map[row + 1] && map[row + 1][col] === "╋")){
      return true
    }
  }
  console.log(connects, disconnects)
  return false
}

console.log(
  checkPipe(
    [ '┫┣┻┓.┓.',
      '┣┫.┃.╋.',
      '┣┫.┃...',
      '┣┫.┗━┓.',
      '┣┫.┓.┗━',
      '┣┫.....',
      '┣┫.....',
      '┣┛.....' ]
  )
  );

// function checkDirection(map, row, col, dir){
//   const canConnectDown = ["┓", "┏", "┃", "┣", "┫", "┳", "╋", undefined];
//   const canConnectUp = ["┗", "┛", "┃", "┣", "┫", "┻", "╋", undefined]
//   const canConnectLeft = ["┓", "┛", "━", "┫", "┳", "┻", "╋", undefined]
//   const canConnectRight = ["┗", "┏", "━", "┣", "┳", "┻", "╋", undefined]
//   const cell = map[row][col];

//   let disconnecteds = 0;

//   if (dir === "down" && canConnectDown.includes(cell)){
//     if (map[row + 1] && !canConnectUp.includes(map[row + 1][col])){
//       disconnecteds++
//     }
//   }

//   if (dir === "up" && canConnectUp.includes(cell)){
//     if (map[row - 1] && !canConnectDown.includes(map[row - 1][col])){
//       disconnecteds++
//     }
//   }

//   if (dir === "right" && canConnectRight.includes(cell)){
//     if (!canConnectLeft.includes(map[row][col + 1])){
//       disconnecteds++
//     }
//   }

//   if (dir === "left" && canConnectLeft.includes(cell)){
//     if (!canConnectRight.includes(map[row][col - 1])){
//       disconnecteds++
//     }
//   }
//   if (disconnecteds !== 4){
//     return false;
//   }
//   return true
// }