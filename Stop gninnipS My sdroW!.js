// https://www.codewars.com/kata/5264d2b162488dc400000001/javascript
function spinWords(string){
  return string.replace(/\w{5,}/g, substr => substr.split("").reverse().join(""));

}
// return string.split(" ").map(i => i.length >= 5 ? i.split("").reverse().join("") : i).join(" ");

console.log(
  spinWords("Hey fellow warriors")
)