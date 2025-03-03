// https://www.codewars.com/kata/544aed4c4a30184e960010f4/javascript

function divisors(integer) {
  const divs = []
  for (let i = 2; i < integer; i++) {
    Number.isInteger(integer / i) && divs.push(integer / i)
  }

  return divs.length ? divs.sort((a, b) => a - b) :  integer + " is prime"
}
