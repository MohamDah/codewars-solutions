// https://www.codewars.com/kata/555624b601231dc7a400017a
function josephusSurvivor(n,k){
  const arr = new Array(n).fill(0).map((i, ind) => ind+1);
  let next = (k - 1) % arr.length;
  
  while (true) {
    if (arr.length === 1) return arr[0];
    arr.splice(next, 1);
    next = (next + k - 1) % arr.length;
  }
}

console.log(
  josephusSurvivor(11, 19)
)