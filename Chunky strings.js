// https://www.codewars.com/kata/66d36190e3fb412d34b4c25f/javascript
function restoreBrackets(s) {
  if (s.length === 1) return s
  return "[" + calcChunk(s.slice(1))[0]
}

function calcChunk(s) {
  if (s.length === 2) return [s + "]", ""]
  let remStr = s
  let newStr = ""

  for (let i = 0; i < 2; i++) {
    if (remStr[0] !== "[") {
      newStr += remStr[0]
      remStr = remStr.slice(1)
    } else {
      let [newChunk, newRemStr] = calcChunk(remStr.slice(1))
      newStr += "[" + newChunk
      remStr = newRemStr
    }
  }
  newStr += "]"
  
  return [newStr, remStr]
}


console.log(
  // restoreBrackets('[c[o[d[e[w[a[rs')
  // restoreBrackets('[x[yy')
  // restoreBrackets('[[ab[ab')
  // restoreBrackets('[[xyy')
  // restoreBrackets('[[[Co[de[[wa[rs')
  restoreBrackets('[[xyy')
  // restoreBrackets('
  // [
  // [[Co[de[[wa[rs
  // ') 
)

// [[[Co][de]][[wa][rs]]]
// [[[Co][de]][[wa][rs]]]