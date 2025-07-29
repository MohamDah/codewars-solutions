// https://www.codewars.com/kata/52f677797c461daaf7000740/javascript
function solution(numbers) {
  let gcd = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    let a = gcd;
    let b = numbers[i];
    if (b > a)
      [a, b] = [b, a];

    while (a > b) {
      const remain = a % b;
      a = b;
      remain === 0 ? gcd = b : b = remain;
    }
  }
  return gcd * numbers.length;
}

console.log(
  solution([6, 9, 21])
);