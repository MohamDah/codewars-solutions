// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
function sortArray(array) {
  const sortodd = array.filter(i => i % 2).sort((a, b) => a - b);
  return array.map(i => i % 2 ? sortodd.shift() : i);
}

console.log(
  sortArray([ -10, -5, -5, 5, 7, 9, -32, 22, -22, 13, 13 ])
)