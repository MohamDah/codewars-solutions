// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/javascript
function beeramid(bonus, price) {
  let remMoney = bonus
  for (let level = 1; true; level++) {
    const levCans = level * level
    const levPrice = levCans * price
    if (remMoney < levPrice) return level - 1
    remMoney -= levPrice
  }
}