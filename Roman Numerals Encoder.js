// https://www.codewars.com/kata/51b62bf6a9c58071c600001b/train/javascript
const numeralRomansMap = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"]
];

function solution(number) {
  let remNum = number;
  let finalStr = '';
  while (remNum > 0) {
    for (const [number, roman] of numeralRomansMap) {
      if (remNum >= number) {
        remNum -= number;
        finalStr += roman;
        break;
      }
    }
  }
  return finalStr;
}