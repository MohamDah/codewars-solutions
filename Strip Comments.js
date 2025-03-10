// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/javascript

function solution(text, markers) {
  const regexs = markers.map(i => new RegExp(` *\\${i}.*(?=\\n|$)`, "g"));

  let newText = text;
  regexs.forEach(rx => newText = newText.replace(rx, ""));

  newText = newText.replace(/ *(?=\n|$)/g, "");
  return newText;
}


console.log(
  JSON.stringify(
    solution("#aa bb\n!cc dd", ["#", "!"])
    // solution("OurS^ \n-LeodxxCJBJ\nXlbI\nBuuDljbxiApGwkU+qA", ["+","-"])
    // solution("zZh@HIxxdmBkZAZGf+mLalBfS\nXcyohYj-jawKcQKm$a \n bSfsN* g~#jPqnFa ", ["!","@","%","/"])
  )
)
