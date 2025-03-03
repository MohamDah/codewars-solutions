// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str){  
  return (str.length%2?str+"_":str).match(/.*?..?/g) || [];
}