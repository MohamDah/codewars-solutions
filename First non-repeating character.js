// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/javascript
function firstNonRepeatingLetter(s) {
  return s.split("").find((i) => s.toLowerCase().indexOf(i.toLowerCase()) === s.toLowerCase().lastIndexOf(i.toLowerCase())) || "";
}

console.log(
  // firstNonRepeatingLetter('sTreSS')
  // firstNonRepeatingLetter('moonmen')
  firstNonRepeatingLetter('∞§ﬁ›ﬂ∞§')
)