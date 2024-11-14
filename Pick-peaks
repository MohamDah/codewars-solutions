// Problem: https://www.codewars.com/kata/5279f6fe5ab7f447890006a7

function pickPeaks(arr){
  let posPeak = [];
  const pos = [];
  const peaks = [];
  arr.forEach((i, index) => {
    if (index === 0) {
      return;
    } else if (arr[index - 1] < i) {
      posPeak = [i, index]
    }
    
    if (posPeak && arr[index + 1] < posPeak[0] && (arr[index-1] <= posPeak[0])) {
      peaks.push(posPeak[0]);
      pos.push(posPeak[1]);
      posPeak = [];
    } 
  })
  
  return {pos: pos, peaks: peaks}
}
