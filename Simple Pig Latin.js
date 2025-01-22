// https://www.codewars.com/kata/520b9d2ad5c005041100000f
function pigIt(str){
  return str.replace(/\w+/g, s => s.slice(1) + s.slice(0, 1) + "ay")
}

pigIt("Hello, world !")