// https://www.codewars.com/kata/554ca54ffa7d91b236000023/javascript

function deleteNth (arr, n) {
  const counts = new Map();
  const finalArr = [];
  for (const i of arr) {
    if (counts.has(i)) {
      counts.set(i, counts.get(i) + 1);
      if (counts.get(i) <= n) {
        finalArr.push(i);
      }
    } else {
      counts.set(i, 1);
      finalArr.push(i);
    }
  }

  return finalArr;
}

// deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3);
