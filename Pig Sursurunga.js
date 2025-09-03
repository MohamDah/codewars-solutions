// https://www.codewars.com/kata/5536aba6e4609cc6a600003d/javascript
function sursurungal(txt) {
  return txt.replace(/([0-9]+) ([a-z]+)/gi, (match, num, word) => {
    num = +num;
    if (num < 2) return match;
    word = word.replace(/s$/, "");
    return num === 2 ? `${num} bu${word}`
      : num <= 9 ? `${num} ${word}zo`
        : `${num} ga${word}ga`;
  });
}

console.log(sursurungal(
  // "2 tomatoes"
  `3 tails of rat
2 legs of snake
1 eye of owl
631 ears of bat`
));
