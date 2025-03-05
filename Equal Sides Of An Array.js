// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/javascript

function findEvenIndex(arr) {
  const rdc = myArr => myArr.reduce((a, i) => a + i, 0);
  return arr.findIndex((_, i) => rdc(arr.slice(0, i)) === rdc(arr.slice(i+1)));
}

console.log(
  findEvenIndex([1,2,3,4,3,2,1])
)