// https://www.codewars.com/kata/585db3e8eec141ce9a00008f
function reverseVowels(str) {
  let vowels = str.match(/[aeiou]/ig)
  if (vowels) {
    vowels = [...vowels]
    return str.replace(/[aeiou]/ig, () => vowels.pop())
  }
  return str
}

console.log(reverseVowels(
  "Hello!"
))