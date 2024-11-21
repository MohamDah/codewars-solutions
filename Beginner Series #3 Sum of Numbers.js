// Problem: https://www.codewars.com/kata/55f2b110f61eb01779000053/javascript

function getSum(a, b)
{
  let sum = 0;
  if (a > b){
    [a, b] = [b, a]
  }
  for (let i=a; i<=b; i++){
    sum += i;
  }
  return sum; 
}