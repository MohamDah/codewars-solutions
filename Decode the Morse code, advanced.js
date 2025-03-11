// https://www.codewars.com/kata/54b72c16cd7f5154e9000457/javascript

const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-.": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
}


function decodeBits(bits){
  const cleanBits = bits.replace(/(^0*)|(0*$)/g, "");
  const rate = cleanBits.match(/1+|0+/g).sort((a, b) => a.length - b.length)[0].length;
  const on = "1".repeat(rate);
  const off = "0".repeat(rate);

  return cleanBits.replaceAll(off.repeat(7), '   ').replaceAll(on.repeat(3), '-').replaceAll(off.repeat(3), ' ').replaceAll(on, '.').replaceAll(off, '');
}

function decodeMorse(morseCode){
  return morseCode.trim().split("   ").map(i => i.split(" ").filter(j => j).map(j => MORSE_CODE[j]).join("")).join(" ");
}

console.log(
  // decodeMorse(
    // decodeBits('1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011')
    decodeBits('01110')
  // )
)