// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/
function upArray(arr) {
  if (arr.length < 1 || arr.some(i => i > 9 || i < 0)) return null;

  for (let i = arr.length - 1; i >= 0; i--) {
    arr[i] = (arr[i] + 1) % 10;
    if (arr[i] === 0)
      i === 0 && arr.unshift(1);
    else break;
  }
  return arr;
}

console.log(upArray(
  // [0,7]
  [
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 0, 1, 2, 3, 4,
    5, 6, 7, 8, 9, 0
  ]
));