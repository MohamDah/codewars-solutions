// Problem: https://www.codewars.com/kata/52c4dd683bfd3b434c000292/javascript
function isInteresting(number, awesomePhrases) {

  for (let num = number; num <= number + 2; num++) {
    if (num < 100) continue;

    let c1 = awesomePhrases.includes(num);
    const numArr = num.toString().split("")
    let c2 = numArr.every((i, index) => index === 0 || i === "0");
    let c3 = numArr.every(i => i === numArr[0]);

    let c4 = numArr.every((i, index) => index === 0 || +i === +numArr[index - 1] + 1 || (numArr[index-1] === "9" && i === "0" && index === numArr.length-1));
    let c5 = numArr.every((i, index) => index === 0 || +i === +numArr[index - 1] - 1 || (numArr[index-1] === "0" && i === "9" && index-1 === 0));
    
    let c6 = numArr.every((i, index) => {
      return (
        index > Math.floor(numArr.length / 2) - 1
        || i === numArr[numArr.length-1 - index]
      )
    })

    if (c1 || c2 || c3 || c4 || c5 || c6){
      return num === number ? 2 : 1;
    }
  }
  return 0;
}

console.log(isInteresting(67890 , []))