// https://www.codewars.com/kata/590938089ff3d186cb00004c/javascript

function suffixSums(a) {
  const b = [];
  for (let i = 0; i < a.length; i++) {
    const val = a.slice(i).reduce((a, i) => a + i, 0);
    b.push(val);
  }
  return b;
}