
class TicTacToe {
  #board = (
    [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  )
  constructor() {
    this.player = "X"
    this.started = false;
    this.ended = false;
  }

  getBoard() {return this.#board}

  move(field) {
    if (this.ended) return [0, "Game ended"];

    if (this.#getEmpty().length === 0) {
      return [0, "Game ended"]
    }

    if (field === undefined) {
      if (this.started) {
        return [0, "Illegal move"]
      } else {
        this.player = "O"
        this.started = true;
        return this.#compMove()
      }
    }

    if (typeof field !== "number" || field < 1 || field > 9) return [0, "Illegal move"]

    const [row, col] = this.#getCell(field);
    let retVal;
    if (this.#board[row][col] === null) {
      this.#board[row][col] = this.player;
      if (this.checkWin(this.player)){
        return [0, "You win!"]
      }
      if (this.#getEmpty().length === 0) {
        this.ended = true;
        return [0, "Draw!"]
      }
      
      retVal = this.#compMove()
      if (this.checkWin(this.player === "X" ? "O" : "X")){
        return [retVal]
      }
      if (this.#getEmpty().length === 0) {
        this.ended = true;
        return [retVal[0], "Draw!"]
      }
      return retVal;
    } else {
      retVal = [0, "Illegal move"]
      return retVal
    }

  }

  #getCell(n) {
    n = n - 1;
    const row = Math.floor(n / 3);
    const col = n % 3;
    return [row, col];
  }


  #getEmpty() {
    const emptys = [];
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (this.#board[row][col] === null) {
          emptys.push([row, col])
        }
      }
    }
    return emptys
  }

  #compMove() {
    const mark = this.player === "X" ? "O" : "X"

    const emptys = this.#getEmpty()
    const rand = Math.floor(Math.random() * emptys.length)

    let [row, col] = emptys[rand];

    this.#board[row][col] = mark;
    const field = (row * 3) + (col + 1)
    return [field, "Your move?"]
  }

  checkWin(sign) {
    // Check for horizontal and vertical win
    let won = false;
    for (let i = 0; i < this.#board.length; i++) {
      if (this.#board[i].every(col => col === sign)) {
        won = true;
        break
      }
      if ([this.#board[0][i], this.#board[1][i], this.#board[2][i]].every(j => j === sign)){
        won = true
        break
      }
    }
    
    if (!won) {

      const firstDiag = [this.#board[0][0], this.#board[1][1], this.#board[2][2]]
      const secondDiag = [this.#board[2][0], this.#board[1][1], this.#board[0][2]]
      if (firstDiag.every(i => i === sign) || secondDiag.every(i => i === sign)) {
        won = true
      }
    }

    if (won) {
      this.ended = true;
    }

    return won;
  }
}


const ttt = new TicTacToe()
let ret;
while (true) {
  const input = +prompt("Enter: ")
  ret = ttt.move(input)
  console.log(ret)
  console.log(ttt)
  if (ret[1] === "Game ended") break;

}