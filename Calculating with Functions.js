// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/javascript

const handleCalc = (left, [right, sign]) => {
  switch (sign) {
    case '+': return left + right;
    case '-': return left - right;
    case '*': return left * right;
    case '/': return Math.floor(left / right);
  }
};

const zero = (arg) => arg ? handleCalc(0, arg) : 0;
const one = (arg) => arg ? handleCalc(1, arg) : 1;
const two = (arg) => arg ? handleCalc(2, arg) : 2;
const three = (arg) => arg ? handleCalc(3, arg) : 3;
const four = (arg) => arg ? handleCalc(4, arg) : 4;
const five = (arg) => arg ? handleCalc(5, arg) : 5;
const six = (arg) => arg ? handleCalc(6, arg) : 6;
const seven = (arg) => arg ? handleCalc(7, arg) : 7;
const eight = (arg) => arg ? handleCalc(8, arg) : 8;
const nine = (arg) => arg ? handleCalc(9, arg) : 9;

const plus = (num) => [num, '+'];
const minus = (num) => [num, '-'];
const times = (num) => [num, '*'];
const dividedBy = (num) => [num, '/'];

console.log(
  // eight(dividedBy(three()))
  // seven(times(five()))
  // four(plus(nine()))
  eight(minus(three()))
);
