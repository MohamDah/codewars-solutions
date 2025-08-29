// https://www.codewars.com/kata/59bb88b84603877db400003b/javascript
const rels = {
  "0": "02abc5jkl8tuv*# ",
  " ": "02abc5jkl8tuv*# ",
  "1": "12abc3def4ghi7pqrs*",
  "2": "2abc5jkl8tuv0 3def1",
  "a": "2abc5jkl8tuv0 3def1",
  "b": "2abc5jkl8tuv0 3def1",
  "c": "2abc5jkl8tuv0 3def1",
  "3": "3def2abc6mno9wxyz#1",
  "d": "3def2abc6mno9wxyz#1",
  "e": "3def2abc6mno9wxyz#1",
  "f": "3def2abc6mno9wxyz#1",
  "4": "4ghi5jkl6mno7pqrs*1",
  "g": "4ghi5jkl6mno7pqrs*1",
  "h": "4ghi5jkl6mno7pqrs*1",
  "i": "4ghi5jkl6mno7pqrs*1",
  "5": "5jkl2abc4ghi6mno8tuv0 ",
  "j": "5jkl2abc4ghi6mno8tuv0 ",
  "k": "5jkl2abc4ghi6mno8tuv0 ",
  "l": "5jkl2abc4ghi6mno8tuv0 ",
  "6": "6mno3def4ghi5jkl9wxyz#",
  "m": "6mno3def4ghi5jkl9wxyz#",
  "n": "6mno3def4ghi5jkl9wxyz#",
  "o": "6mno3def4ghi5jkl9wxyz#",
  "7": "7pqrs4ghi8tuv9wxyz*1",
  "p": "7pqrs4ghi8tuv9wxyz*1",
  "q": "7pqrs4ghi8tuv9wxyz*1",
  "r": "7pqrs4ghi8tuv9wxyz*1",
  "s": "7pqrs4ghi8tuv9wxyz*1",
  "8": "8tuv2abc5jkl7pqrs9wxyz0 ",
  "t": "8tuv2abc5jkl7pqrs9wxyz0 ",
  "u": "8tuv2abc5jkl7pqrs9wxyz0 ",
  "v": "8tuv2abc5jkl7pqrs9wxyz0 ",
  "9": "9wxyz3def6mno7pqrs8tuv#",
  "w": "9wxyz3def6mno7pqrs8tuv#",
  "x": "9wxyz3def6mno7pqrs8tuv#",
  "y": "9wxyz3def6mno7pqrs8tuv#",
  "z": "9wxyz3def6mno7pqrs8tuv#",
  "*": "*14ghi7pqrs#0 ",
  "#": "#3def6mno9wxyz*0 ",
}

function good(t){
  for (let i = 1; i < t.length; i++) {
    const char = t[i].toLowerCase()
    const lChar = t[i-1].toLowerCase()
    if (!rels[lChar].includes(char))
      return false
  }
  return true
}

console.log(
  // good("Jako")
  // good("*8#")
  // good("B111QSYMMIJJC2BACABC0*QQSZD9")
  good("7**##X7W8J5MN3MOLULH4QP*0#ZF321DD#* 0 CAFDF")
)