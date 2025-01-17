// https://www.codewars.com/kata/54ff3102c1bad923760001f3/javascript

function getCount(str) {
    return str.split("").reduce((a, i) => /a|e|i|o|u/.test(i) ? a + 1 : a, 0)
}

console.log(
    getCount("abracadabra")
)