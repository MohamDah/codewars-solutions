// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
function alphabetPosition(text) {
  return text.split("").filter(i => /[a-zA-Z]/.test(i)).map(i => i.charCodeAt(0) - (/[a-z]/.test(i) ? 96 : 64)).join(" ")
}

console.log(
  alphabetPosition("The sunset sets at twelve o' clock.")
)

// return text.split("").map(i => /[a-z]/.test(i) ? i.charCodeAt(0) - 96 : /[A-Z]/.test(i) ? i.charCodeAt(0) - 64 : undefined).filter(Number).join(" ")

// function alphabetPosition(text) {
//   const codes = []
//   const textArr = text.split("")
//   textArr.forEach(i => {
//     if (/[a-z]/.test(i)){
//       codes.push(i.charCodeAt(0) - 96)
//     } else if (/[A-Z]/.test(i)) {
//       codes.push(i.charCodeAt(0) - 64)
//     }
//   })
//   return codes.join(" ");

// }