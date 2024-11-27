// Kata: https://www.codewars.com/kata/55983863da40caa2c900004e
function nextBigger(n) {
  const og = n.toString().split("");
  const seen = [];
  for (let ind = og.length - 1; ind > 0; ind--) {
    seen.push(og[ind])
    if (og[ind] > og[ind - 1]) {
      filtArr = seen.filter(i => i > og[ind - 1]).sort();

      const repNum = seen.sort().splice(seen.indexOf(filtArr[0]), 1, og[ind-1])
      const ans = [...og.slice(0, ind - 1), repNum[0], ...seen.sort()]
      return +ans.join("")
    }
  }
  return -1
}


