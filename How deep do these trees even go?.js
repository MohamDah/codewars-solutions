// https://www.codewars.com/kata/591b3ca0e0f838dfea0000bf
function arrayDeepness(arr) {
  const depths = getDepths(arr);

  const min = Math.min(...depths);
  const max = Math.max(...depths);
  const mean = Math.round((depths.reduce((a, i) => a + i) / depths.length) * 1000) / 1000;

  return { min, max, mean };
}

function getDepths(arr) {
  let depths = [];
  for (let i of arr) {
    if (Array.isArray(i))
      depths = [...depths, ...getDepths(i).map(i => i + 1)];
    else
      depths.push(1);
  }
  return depths;
}

console.log(arrayDeepness(
  // [[1.23], [, [undefined], 7.89]]
  [['s'], ['t']]
));
