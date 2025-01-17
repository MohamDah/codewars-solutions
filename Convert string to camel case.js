// Kata: https://www.codewars.com/kata/517abf86da9663f1d2000003/javascript

function toCamelCase(str) {
  return str.split(/[\-\_]/).map((i, ind) => ind > 0 ? i[0].toUpperCase()+i.slice(1) : i).join("")
}

console.log(
  toCamelCase("the-stealth-warrior")
)