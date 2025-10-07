function solution(hour) {
  const nStr = hour.toString()
  if (nStr.length < 3 || nStr.length > 4) 
    throw new Error("Invalid Number")

  return nStr.replace(/(.+)(\d\d)/, "$1:$2")
}

console.log(solution(
  10
))