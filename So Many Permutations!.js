// https://www.codewars.com/kata/5254ca2719453dcc0b00027d/javascript

function permutations (string) {
  if (string.length === 1) return [string];
  if (string.length === 2) return [...new Set([string, string[1] + string[0]])];

  const strArr = string.split('');
  const perms = strArr.reduce((acc, v, i) => [
    ...acc,
    ...permutations([...strArr.slice(0, i), ...strArr.slice(i + 1)].join("")).map(j => j + v)
  ], []);

  return [...new Set(perms)];
}


console.log(
  permutations('aabb')
);
