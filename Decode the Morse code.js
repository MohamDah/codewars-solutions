// https://www.codewars.com/kata/54b724efac3d5402db00065e/javascript

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

decodeMorse = function(morseCode){
  return morseCode.trim().split("   ").map(i => i.split(" ").filter(j => j).map(j => MORSE_CODE[j]).join("")).join(" ");
}

console.log(
  decodeMorse(" . ")
)