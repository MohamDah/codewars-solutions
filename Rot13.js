// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

function rot13(message) {
  return message
    .replace(/[a-z]/g, (str) => String.fromCharCode((str.charCodeAt() - 97 + 13) % 26 + 97))
    .replace(/[A-Z]/g, (str) => String.fromCharCode((str.charCodeAt() - 65 + 13) % 26 + 65))
}

console.log(
  // rot13("abcdefghijklmnopqrstuvwxyz")
  rot13("m")
)