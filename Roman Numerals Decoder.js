// https://www.codewars.com/kata/51b6249c4612257ac0000005/javascript
const romanNumeralsMap = [
  ['CM', 900],
  ['M', 1000],
  ['CD', 400],
  ['D', 500],
  ['XC', 90],
  ['C', 100],
  ['XL', 40],
  ['L', 50],
  ['IX', 9],
  ['X', 10],
  ['IV', 4],
  ['V', 5],
  ['I', 1]
];

function solution(roman) {
  let remStr = roman;
  let finalNum = 0;
  while (remStr.length > 0) {
    for (const [roman, num] of romanNumeralsMap) {
      if (remStr.startsWith(roman)) {
        remStr = remStr.replace(roman, '');
        finalNum += num;
        break;
      }
    }
  }
  return finalNum;
}
