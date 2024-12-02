// Kata: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/javascript
function persistence(num) {
  let newNum = num.toString();
  let count = 0;
  while (newNum.length > 1) {
    count++;
    newNum = newNum.split("").reduce((a, i) => +a * +i);
    newNum = newNum.toString();
  }
  return count;
}

console.log(persistence(39))