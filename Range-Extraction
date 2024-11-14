// Problem: https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function solution(list){
  const sortedList = list.sort((a, b) => a - b);
  const endList = [];
  
  let tempList = []
  for (let i of sortedList) {
    
    if (tempList.length === 0) {
      tempList.push(i);
    } else if (tempList[tempList.length-1] + 1 === i){
      tempList.push(i)
    }else{
      if (tempList.length < 3){
        endList.push(...tempList);
      } else {
        endList.push(`${tempList[0]}-${tempList[tempList.length-1]}`)
      }
      tempList = [i];
    }
    
    if (i === sortedList[sortedList.length - 1]){
      if (tempList.length < 3) {
        endList.push(...tempList)
      } else {
        endList.push(`${tempList[0]}-${tempList[tempList.length-1]}`)
      }
    }
  }
  return endList.join(",")
  
}
