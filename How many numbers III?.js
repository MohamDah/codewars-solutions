// https://www.codewars.com/kata/5877e7d568909e5ff90017e6/train/javascript

function findAll(sum, count) {
  if (9 * count < sum) return [];

  let remSum = sum;
  let curr = [];
  while (curr.length < count) {
    const ones = count - (curr.length + 1);
    if (remSum - ones >= 9) {
      curr.unshift(9);
      remSum -= 9;
    } else if (curr[0] && curr[0] < 9) {
      curr.unshift(1);
    } else { 
      curr.unshift(remSum - ones);
      remSum -= remSum - ones;
    }
  }
  let first = curr.join("");
  let last = "";
  const lastInd = count - 1;
  const secLastInd = count - 2;
  let amount = 0;

  while (true) {
    amount++;
    if (curr[secLastInd] > curr[lastInd] - 2) {
      let newCur = getNextValid(curr, sum);
      if (newCur === curr){
        last = curr.join("");
        break;
      } else {
        curr = newCur;
        continue;
      }
    }
    curr[lastInd]--;
    curr[secLastInd]++;
  }

  return [amount, first, last];
}

function getNextValid(num, sum) {
  const thirdLast = num.length - 3;
  let newNum = null;
  
  for (let i = num.length - 3; i >= 0; i--){
    const poss = [...num];
    poss.fill(++poss[thirdLast-i], thirdLast-i);
    let possSum = poss.reduce((a, i) => a + i);
    if (possSum <= sum){
      poss[poss.length - 1] = sum - (possSum - poss[poss.length - 1]);
      newNum = poss;
    }
  }

  if (newNum){
    for (let i = newNum.length - 1; i >= 0; i--){
      if (newNum[i] <= 9) break;
      newNum[i - 1] += newNum[i] - 9;
      newNum[i] = 9;
    }
    return newNum;
  }
  return num;
}

// console.log(
//   // findAll(29, 8)
// )
console.log(
    // findAll(10, 3)
  findAll(35, 6)
  // findAll(21, 7)
  // findAll(36, 8)
  // getNextValid([1, 1, 1], 27)
)
// findAll(27, 3)
// getNextValid([2,2,3,3], 10)

// [1,1,1,1,6,9,9,9]

















// function oldfindAll(sum, count) {
//   if (9 * count < sum) return [];

//   const max = +"".padEnd(count, "9");
//   const min = +`1`.padEnd(count, "0");

//   let first = null;
//   let last = null;
//   let amount = 0;
//   for (let i = min; i <= max; i++) {
//     const iArr = i.toString().split("").map(Number);
//     const isInc = iArr.every((i, ind) => !ind || iArr[ind - 1] <= i);
//     if (!isInc) continue;

//     const lSum = iArr.reduce((a, n) => a + n);
//     if (lSum !== sum) continue;

//     // console.log(i)
//     amount++;
//     if (first) last = i.toString();
//     else first = i.toString();
//   }
//   return [amount, first, last ? last : first]



// }