// Problem: https://www.codewars.com/kata/52b7ed099cdc285c300001cd

function sumIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const newInter = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = newInter[newInter.length - 1]
    if (isOverlap(last, intervals[i])) {
      newInter[newInter.length - 1][0] = last[0] <= intervals[i][0] ? last[0] : intervals[i][0];
      newInter[newInter.length - 1][1] = last[1] > intervals[i][1] ? last[1] : intervals[i][1];
    } else {
      newInter.push(intervals[i])
    }
  }
  return [...newInter].reduce((acc, i) => acc + i[1] - i[0], 0)
}

function isOverlap(pair1, pair2) {
  return pair1[0] <= pair2[1] && pair1[1] >= pair2[0];
}
