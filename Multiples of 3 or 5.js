// https://www.codewars.com/kata/514b92a657cdc65150000006/javascript
function solution(number) {
  let sum = 0;
  const seen = new Set()
  const doSum = n => {
    for (let i = n; i < number; i += n) {
      if (seen.has(i)) continue;
      sum += i;
      seen.add(i)
    }
  }
  doSum(3);
  doSum(5);
  return sum;
}

solution(20)