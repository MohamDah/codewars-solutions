// https://www.codewars.com/kata/56832fb41676465e82000030/javascript
class Hangman {
  constructor(word) {
    this.word = word;
    this.prog = word.split("").map(_ => "_");
    this.wGuesses = "";
    this.strikes = 0;
  }

  guess(letter) {
    if (this.strikes > 6 || !this.prog.includes("_")) return "The game has ended.";

    if (this.word.includes(letter)) {
      this.prog = this.prog.map((i, idx) => this.word[idx] === letter ? letter : i);
    } else {
      if (!this.wGuesses.includes(letter)) {
        this.strikes++;
        this.wGuesses += letter;
      }
    }


    return !this.prog.includes("_") ?
      `You found the word! (${this.word})`
      : this.strikes > 6 ?
        `You got hung! The word was ${this.word}.`
        : `${this.prog.join(" ")}${this.wGuesses.length ? ` # ${this.wGuesses}` : ""}`;
  }
}

const hangman = new Hangman("codet");

for (let i of "warsedocxyz")
  console.log(hangman.guess(i));