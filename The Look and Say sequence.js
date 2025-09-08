function getLines(line) {
  if (line === 0) return "";
  const currLine = ["1"];

  for (let i = 0; i < line - 1; i++) {
    currLine.push(
      currLine[i].replace(/(\d)\1*/g, (match) => `${match.length}${match[0]}`)
    );
  }
  return currLine.join(",");
}

console.log(
  getLines(5)
);