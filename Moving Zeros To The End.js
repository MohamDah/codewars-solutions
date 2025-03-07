// https://www.codewars.com/kata/52597aa56021e91c93000cb0

function moveZeros(arr) {
  return [...arr.filter(i => i !== 0), ...arr.filter(i => i === 0)];    
}