function parseInt(string) {
    const nums = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90, hundred: 100, thousand: 1000, million: 1000000 }
    const strArr = string.split(/[\s-]+/);
    const endNum = [];
    let tempNum = 0;

    for (let i of strArr) {
        if (i === "hundred") {
            tempNum *= nums[i];
        } else if (i === "thousand") {
            endNum.push(tempNum.toString() + "000");
            tempNum = 0;
        } else if (i === "million") {
            endNum.push(tempNum.toString() + "000000")
            tempNum = 0;
        } else if (Object.keys(nums).includes(i)) {
            tempNum += nums[i];
        }
    }
    endNum.push(tempNum);

    return endNum.reduce((a, i) => +a + +i)

}

console.log(parseInt("seven hundred eighty-three thousand nine hundred and nineteen"))