// https://www.codewars.com/kata/51f9d3db4095e07f130001ee/
var compose = function (n, ...funcs) {
  return funcs.reduce((a, i) => i(a), n);
};