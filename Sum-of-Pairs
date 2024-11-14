// Problem: https://www.codewars.com/kata/54d81488b981293527000c8f

function sumPairs(ints, s) {
  const seen = new Set();  
  
  for (let i = 0; i < ints.length; i++) {
    const otherPart = s - ints[i];
    if (seen.has(otherPart)) {
      return [otherPart, ints[i]];
    } else {
      seen.add(ints[i]);
    }
  }

  return undefined
}
