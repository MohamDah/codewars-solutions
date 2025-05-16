// https://www.codewars.com/kata/526dbd6c8c0eb53254000110/javascript
function alphanumeric(string) {
  return /^[a-zA-Z0-9]+$/.test(string)
}

console.log(
  alphanumeric("Mazinkaiser")
  // alphanumeric("hello world_")
)