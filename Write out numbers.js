// https://www.codewars.com/kata/52724507b149fa120600031d/javascript
const obj = {
  "0": "zero",
  "1": "one",
  "2": "two",
  "3": "three",
  "4": "four",
  "5": "five",
  "6": "six",
  "7": "seven",
  "8": "eight",
  "9": "nine",
  "10": "ten",
  "11": "eleven",
  "12": "twelve",
  "13": "thirteen",
  "14": "fourteen",
  "15": "fifteen",
  "16": "sixteen",
  "17": "seventeen",
  "18": "eighteen",
  "19": "nineteen",
  "20": "twenty",
  "30": "thirty",
  "40": "forty",
  "50": "fifty",
  "60": "sixty",
  "70": "seventy",
  "80": "eighty",
  "90": "ninety",
};

function number2words(n) {
  // works for numbers between 0 and 999999   
  if (n === 0) return "zero"

  let nStr = n.toString();
  let resStr = "";

  if (nStr.length === 6) {
    resStr += ` ${obj[nStr[0]]} hundred`;
    nStr = nStr.slice(1);
    nStr = Number(nStr).toString();
  }

  if (nStr.length === 5) {
    if (nStr.slice(0, 2) in obj) {
      resStr += ` ${obj[nStr.slice(0, 2)]}`;
    } else {
      const i1 = obj[nStr[0] + "0"];
      const i2 = obj[nStr[1]];
      resStr += ` ${i1}-${i2}`;
    }

    nStr = nStr.slice(2);
    nStr = Number(nStr).toString();
  }

  if (nStr.length === 4) {
    resStr += ` ${obj[nStr[0]]}`;
    nStr = nStr.slice(1);
    nStr = Number(nStr).toString();
  }

  if (resStr.length > 0 || nStr === "0") {
    resStr += " thousand "
  }

  if (nStr.length === 3) {
    resStr += `${obj[nStr[0]]} hundred `;
    nStr = nStr.slice(1);
    nStr = Number(nStr).toString();
  }

  if (nStr.length === 2) {
    if (nStr.slice(0, 2) in obj) {
      resStr += `${obj[nStr.slice(0, 2)]}`;
    } else {
      const i1 = obj[nStr[0] + "0"];
      const i2 = obj[nStr[1]];
      resStr += `${i1}-${i2}`;
    }

    resStr += " "
    nStr = nStr.slice(2);
    nStr = Number(nStr).toString();
  }

  if (nStr.length === 1 && nStr[0] > "0") {
    resStr += `${obj[nStr[0]]}`;
    nStr = nStr.slice(1);
    nStr = Number(nStr).toString();
  }

  return resStr.trim();
}


console.log(
  // number2words(200704)
  // number2words(1003)
  // number2words(813692)
  number2words(907577)
);

// seventy-nine thousand three hundred fourteen
// seventy-nine thousand three hundred forteen