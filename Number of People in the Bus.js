// Kata: https://www.codewars.com/kata/5648b12ce68d9daa6b000099
var number = function(busStops){
  return busStops.reduce((a, i) => a+i[0]-i[1],0);
}