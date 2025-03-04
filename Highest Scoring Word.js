// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/javascript

function high(x){
  const score = a => a.split("").reduce((b, j) => b + j.charCodeAt(0) - 96, 0);
  return x.split(" ").reduce((a, i) => score(a) < score(i) ? i : a);
}

console.log(
  high("what time are we climbing up the volcano")
)