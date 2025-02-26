// https://www.codewars.com/kata/55c6126177c9441a570000cc/javascript

function orderWeight(string) {
  const nums = string.split(" ").sort((a, b) => {
    const n1 = a.split("").reduce((acc, val) => acc + +val, 0)
    const n2 = b.split("").reduce((acc, val) => acc + +val, 0)
    if (n1 > n2) {
      return 1
    }
    if (n1 === n2 && a > b) {
      return 1
    }
    return -1
  })
  return nums.join(" ")
}

// 40 122 160 7 7 70 8 153 63 29 3225 10
// orderWeight("6343 160 382486 7 103234 8 231511 40 200940 7 3225 29 84592 63 144662 153 366077 187 446806 122 70")