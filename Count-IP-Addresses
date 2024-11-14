// Problem: https://www.codewars.com/kata/526989a41034285187000de4

function ipsBetween(start, end){
  //TODO
  startArr = start.split(".");
  startNum = 0;
  startNum += parseInt(startArr[3]);
  startNum += parseInt(startArr[2]) * 256;
  startNum += parseInt(startArr[1]) * 256 * 256;
  startNum += parseInt(startArr[0]) * 256 * 256 * 256;
  
  endArr = end.split(".");
  endNum = 0;
  endNum += parseInt(endArr[3]);
  endNum += parseInt(endArr[2]) * 256;
  endNum += parseInt(endArr[1]) * 256 * 256;
  endNum += parseInt(endArr[0]) * 256 * 256 * 256;


  return endNum - startNum;
}
