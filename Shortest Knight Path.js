// https://www.codewars.com/kata/549ee8b47111a81214000941/javascript
const cToN = { "a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7 };
const nToC = { "0": "a", "1": "b", "2": "c", "3": "d", "4": "e", "5": "f", "6": "g", "7": "h" };
const moveSteps = [[-1, 2], [1, 2], [-2, -1], [2, 1], [-2, 1], [2, -1], [1, -2], [-1, -2]];

function knight(start, finish) {
  let frontier = [];
  let currPos = [start, 0];
  while (currPos !== finish) {
    const coord = algToCoord(currPos[0]);

    for (let move of moveSteps) {
      const newMove = coordToAlg([
        coord[0] + move[0],
        coord[1] + move[1]
      ]);
      if (newMove === finish)
        return currPos[1] + 1;
      if (newMove)
        frontier.push([newMove, currPos[1] + 1]);
    }
    currPos = frontier.shift();
  }
}

function algToCoord(posStr) {
  const left = cToN[posStr[0]];
  const right = +posStr[1] - 1;
  if (left === undefined || right < 0 || right > 7) return null;
  return [left, right];
}
function coordToAlg(coord) {
  const left = nToC[coord[0]];
  const right = coord[1] + 1;
  if (left === undefined || right < 1 || right > 8) return null;
  return `${left}${right}`;
}


// knight("a3", "b5")
console.log(
  // algToCoord("a1")
  // coordToAlg([0,7])
  // calcPossMoves("a1")
  knight("a1", "f7")
);