// https://www.codewars.com/kata/529b9ec8064ec38636000134

function TicTacToe() {
  // Initialize with board grid, default player X, and end game boolean.
  this.board = (
    [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  )
  this.player = "X"
  this.ended = false

}

// Main move method
TicTacToe.prototype.move = function (field) {
  // If ended is true. return
  if (this.ended) return [0, "Game ended"];

  // If there are no empty cells, return
  if (this.getEmpty().length === 0) {
    return [0, "Game ended"]
  }

  // If no input passed, switch mark, then make computer move.
  if (!field) {
    this.player = this.player === "X" ? "O" : "X"
    const retVal = this.compMove()

    // If computer won.
    if (this.checkWin(this.player === "X" ? "O" : "X")) {
      this.ended = true;
      return [retVal[0], "I win!"]
    }
    // If board has no empty spaces.
    if (this.getEmpty().length === 0) {
      this.ended = true;
      return [retVal[0], "Draw!"]
    }
    // return normal your move? value.
    return retVal
  }

  // If invalid input.
  if (typeof field !== "number" || field < 1 || field > 9) return [0, "Illegal move"]

  // convert field to row-col pair
  const [row, col] = this.getCell(field);
  let retVal;

  if (this.board[row][col] === null) {
    // If cell is not taken
    this.board[row][col] = this.player;
    // Do checks
    if (this.checkWin(this.player)) {
      return [0, "You win!"]
    }
    if (this.getEmpty().length === 0) {
      this.ended = true;
      return [0, "Draw!"]
    }

    // Make computer move, and do checks.
    retVal = this.compMove()
    if (this.checkWin(this.player === "X" ? "O" : "X")) {
      return [retVal[0], "I win!"]
    }
    if (this.getEmpty().length === 0) {
      this.ended = true;
      return [retVal[0], "Draw!"]
    }
    return retVal;
  } else {
    // If cell is taken.
    retVal = [0, "Illegal move"]
    return retVal
  }
}

TicTacToe.prototype.getCell = function (n) {
  n = n - 1;
  const row = Math.floor(n / 3);
  const col = n % 3;
  return [row, col];
}

TicTacToe.prototype.getEmpty = function () {
  const emptys = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (this.board[row][col] === null) {
        emptys.push([row, col])
      }
    }
  }
  return emptys
}

TicTacToe.prototype.compMove = function () {
  const mark = this.player === "X" ? "O" : "X"

  const picks = [5, 1, 3, 7, 9, 2, 4, 6, 8]
  for (let pick of picks) {
    const [row, col] = this.getCell(pick)
    if (this.board[row][col] === null) {
      this.board[row][col] = mark;
      const field = (row * 3) + (col + 1)
      return [field, "Your move?"]
    }
  }

}

TicTacToe.prototype.checkWin = function (sign) {
  let won = false;
  for (let i = 0; i < this.board.length; i++) {
    if (this.board[i].every(col => col === sign)) {
      won = true;
      break
    }
    if ([this.board[0][i], this.board[1][i], this.board[2][i]].every(j => j === sign)) {
      won = true
      break
    }
  }

  if (!won) {
    const firstDiag = [this.board[0][0], this.board[1][1], this.board[2][2]]
    const secondDiag = [this.board[2][0], this.board[1][1], this.board[0][2]]
    if (firstDiag.every(i => i === sign) || secondDiag.every(i => i === sign)) {
      won = true
    }
  }

  if (won) {
    this.ended = true;
  }

  return won;
}












// ----------------------------------------- Test game in command line


// const readline = require('readline');
// // Create an interface for input and output
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const askQuestion = (question) => {
//   return new Promise((resolve) => {
//     rl.question(question, (answer) => {
//       resolve(answer);
//     });
//   });
// };

// // Main async function
// const main = async () => {
//   // Get user input using await
//   const ttt = new TicTacToe()
//   while (true) {
//     const input = await askQuestion('Enter Move: ');
//     ret = ttt.move(+input)
//     console.log(ret)
//     console.log(ttt.board[0])
//     console.log(ttt.board[1])
//     console.log(ttt.board[2])
//     if (ret[1] === "Game ended") break;

//   }

//   // Print the result

//   // Close the readline interface
//   rl.close();
// };

// // Call the main async function
// main();