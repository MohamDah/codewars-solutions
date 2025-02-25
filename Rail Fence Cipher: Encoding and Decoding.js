// https://www.codewars.com/kata/58c5577d61aefcf3ff000081/javascript

function encodeRailFenceCipher(string, numberRails) {
  // Initialize rails array, and split string.
  const rails = new Array(numberRails).fill('');
  const strArr = string.split('');

  // Iterate over string and add characters to rail.
  all: while (strArr.length > 0) {
    for (let i = 0; i < numberRails; i++) {
      if (!strArr.length) break all;
      rails[i] += (strArr.shift());
    }
    for (let i = numberRails - 2; i > 0; i--) {
      if (!strArr.length) break all;
      rails[i] += strArr.shift();
    }
  }

  // return each rail joined.
  return rails.join('');
}

function decodeRailFenceCipher(string, numberRails) {
  const rowLengths = new Array(numberRails).fill(0);
  let strArr = string.split('');

  // Figure out the length of each rail.
  all: while (strArr.length > 0) {
    for (let i = 0; i < numberRails; i++) {
      if (!strArr.length) break all;
      strArr.shift();
      rowLengths[i]++;
    }
    for (let i = numberRails - 2; i > 0; i--) {
      if (!strArr.length) break all;
      strArr.shift();
      rowLengths[i]++;
    }
  }

  // Create rails.
  strArr = string.split('');
  const rails = [];
  for (const i of rowLengths) {
    rails.push(strArr.splice(0, i));
  }

  // Decrypt using the same encyption method.
  let finalStr = '';
  all: while (true) {
    for (let i = 0; i < numberRails; i++) {
      if (rails[i].length === 0) break all;
      finalStr += rails[i].shift();
    }
    for (let i = numberRails - 2; i > 0; i--) {
      if (rails[i].length === 0) break all;
      finalStr += rails[i].shift();
    }
  }

  return finalStr;
}

// decodeRailFenceCipher('WECRLTEERDSOEEFEAOCAIVDEN', 3);
