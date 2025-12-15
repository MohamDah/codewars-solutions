// https://www.codewars.com/kata/58379c3b51e3b680aa000164
function sumUpNumbers(arr) {
  const sum = arr.reduce((a, i) => {
    let decim = 0
    i = i.replace(/[,.](\d{1,2})$/, (_, g1) => {
      decim += Number(g1)
      return ""
    })
    i = i.replace(/[.,]/g, "")
    return a + Number(`${i}.${decim}`)
  }, 0)
  return sum.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

console.log(
  sumUpNumbers(
    ["1,234.34", "1.324,2", "14"]
  )
)
