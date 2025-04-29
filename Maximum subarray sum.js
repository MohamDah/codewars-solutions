// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

var maxSequence = function (arr) {
  if (arr.length === 0) return 0
  if (arr.every(i => i < 0)) return 0

  let max = arr[0]
  let currSum = arr[0]

  for (let i = 1; i < arr.length; i++) {
    currSum = Math.max(arr[i], currSum + arr[i])
    max = Math.max(max, currSum)
  }

  return max
}

console.log(
  // maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  maxSequence([7,4,11,-11,39,36,10,-6,37,-10,-32,44,-26,-34,43,43])
  // maxSequence([40, 26, -39, -35, -23, 4, -21, -31, -15, 18, 0, -2, -12, 3, 2, -22, 26, -7, 3, -21, 41, -46, -3, -40, 31, -13, 27, -35])
)