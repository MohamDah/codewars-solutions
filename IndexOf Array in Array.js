// https://www.codewars.com/kata/5783ef69202c0ee4cb000265/javascript

var searchArray = function (arrayToSearch, query) {
  if (!Array.isArray(query) || query.length !== 2) throw Error("Invalid query");

  for (let i = 0; i < arrayToSearch.length; i++) {
    const tup = arrayToSearch[i];
    if (!Array.isArray(tup) || tup.length !== 2)
      throw Error("Invalid element");

    if (tup[0] === query[0] && tup[1] === query[1])
      return i;
  }
  return -1;
};

console.log(
  searchArray(
    [[2, 3], [7, 2], [9, 20], [1, 2], [7, 2], [45, 4], [7, 87], [4, 5], [2, 7], [6, 32]],
    [1, 12]
  )
);