// https://www.codewars.com/kata/54b81566cd7f51408300022d/train/javascript

function wordSearch(query, seq) {
  const newArr = seq.filter(i => i.toLowerCase().includes(query.toLowerCase()))
  return newArr.length ? newArr : ["Empty"]
}


console.log(
  wordSearch(
    "me",
    ["home", "milk", "Mercury", "fish"]
  )
)