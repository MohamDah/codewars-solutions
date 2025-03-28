// https://www.codewars.com/kata/5629db57620258aa9d000014/javascript

function mix(s1, s2) {
  const maxOccs1 = new Map()
  const maxOccs2 = new Map()
  s1.split("").forEach(i => /[a-z]/.test(i) && maxOccs1.set(i, (maxOccs1.get(i) || 0) + 1))
  s2.split("").forEach(i => /[a-z]/.test(i) && maxOccs2.set(i, (maxOccs2.get(i) || 0) + 1))

  const finalOccs = new Map()
  const signs = new Map()

  maxOccs1.forEach((v, k) => {
    if (v < 2) return  

    finalOccs.set(k, v)
    signs.set(k, "1")
    
  })
  maxOccs2.forEach((v, k) => {
    if (v < 2) return

    if ((finalOccs.get(k) || 0) < v) {
      finalOccs.set(k, v)
      signs.set(k, "2")
    } else if (finalOccs.get(k) === v) {
      finalOccs.set(k, v)
      signs.set(k, "=")
    }
  })

  const strs = []
  finalOccs.forEach((v, k) => strs.push(`${signs.get(k)}:${k.repeat(v)}`))

  strs.sort((a, b) => {
    const sub = b.length - a.length
    if (sub === 0) {
      return a > b ? 1 : a < b ? -1 : 0
    }
    return sub
  })
  return strs.join("/")
}


// mix("Are they here", "yes, they are here")
console.log(
  mix(" In many languages", " there's a pair of functions")
)