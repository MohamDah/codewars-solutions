// https://www.codewars.com/kata/51b66044bce5799a7f000003/javascript

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

const numeralRomansMap = romanNumeralsMap.map(([k, v]) => [v, k]).sort((a, b) => b[0] - a[0]);

class RomanNumerals {
  static toRoman (num) {
    let remNum = num;
    let finalStr = '';
    while (remNum > 0) {
      for (const [num, roman] of numeralRomansMap) {
        if (remNum >= num) {
          remNum -= num;
          finalStr += roman;
          break;
        }
      }
    }
    return finalStr;
  }

  static fromRoman (str) {
    let remStr = str;
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
}

console.log(
  // RomanNumerals.fromRoman("MMVIII")
  RomanNumerals.toRoman(2008)
);
