// https://www.codewars.com/kata/58f174ed7e9b1f32b40000ec/train/javascript
function maxProfit(prices) {
  let [lowest, profit] = [Infinity, -Infinity];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] - lowest > profit) profit = prices[i] - lowest

    if (prices[i] < lowest) lowest = prices[i]
  }
  return profit;
}

console.log(
  // maxProfit([3, 10, 8, 4])
  // maxProfit([6, 73, 98, 74, 30, 66, 81, 99, 83, 82, 0, 40, 33, 80, 46, 44, 82, 0, 40])
  maxProfit(
    [ 10, 7, 5, 4, 1 ]
    // [0,1,1,1,1]
    // [11,11,8,4,0,1,3,5,2,5,4,0]
    // [26, 23, 20, 16, 13, 9, 6, 2]
  )
);

