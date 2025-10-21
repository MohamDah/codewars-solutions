// https://www.codewars.com/kata/6411b91a5e71b915d237332d/

function validParentheses(parenStr) {
  let opens = 0
  for (let i of parenStr) {
    if (i === "(") 
      opens++
    if (i === ")") 
      opens--
    if (opens < 0) 
      return false
  }
  return opens === 0
}

console.log(validParentheses(
  // "()"   
  "(())((()())())" 
))