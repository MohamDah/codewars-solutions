// https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3/javascript
function makeLooper(str) {
  let currIdx = 0
  return () => {
    const rv = str[currIdx]
    currIdx = (currIdx + 1) % str.length
    return rv
  }
}