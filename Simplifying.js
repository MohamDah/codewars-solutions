function simplify(equalities, formula) {
  const concs = {};

  equalities.forEach(i => {
    let match = i.match(/(.+)\=(.+)/);
    let key = match[2].trim();
    let value = match[1].trim();
    concs[key] = value;
  });
  
  for (let a in [1, 2]){
    Object.entries(concs).forEach(i => {
      let opSide = i[1].split("");
      opSide = opSide.map(char => {
        if (char in concs){
          return `(${concs[char]})`
        }
        return char
      });
      concs[i[0]] = opSide.join("")
    });
  }

  let newFormula = formula;
  
  Object.entries(concs).forEach(i => newFormula = newFormula.replaceAll(i[0], `(${i[1]})`));
  
  const lastTerm = newFormula[newFormula.search(/[a-zA-Z]/)];

  newFormula = newFormula.replace(/(?<![\d])[a-zA-Z]/g, str => `1${str}`);
  newFormula = newFormula.replaceAll(lastTerm, "");
  newFormula = newFormula.replace(/(?<=[^ \+\-\/\()] *)\(/g, "*(");
  newFormula = newFormula.replace(/\s/g, "");
  
  return `${eval(newFormula)}` + lastTerm;
}



console.log(
  // simplify([ "a + a = b", "b - d = c ", "a + b = d" ], "c + a + b")
  // simplify(["a + 3g = k", "-70a = g"], "-k + a" )
  // simplify(["(-3f + q) + r = l","4f + q = r","-10f = q"], "20l + 20(q - 200f)" )
  // simplify(["-(-(-(-(-(g))))) - l  = h","8l = g"], "h - l - g" ), "-18l"
  simplify( ["y + 6Y - k - 6 K = f"," F + k + Y - y = K","Y = k","y = Y","y + Y = F"], "k - f + y")

)

