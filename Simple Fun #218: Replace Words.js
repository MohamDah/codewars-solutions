// https://www.codewars.com/kata/59014fbb526ff1af0400004b
function replaceWords(sentence) {
  const words = sentence.toLowerCase().split(" ");
  const sorted = [...words].sort((a, b) => b.length - a.length);

  for (let i = 0; i < Math.floor(words.length / 2); i++) {
    const indF = words.findIndex(x => x === sorted[i]);
    const indL = words.findIndex(x => x === sorted[sorted.length - 1 - i]);
    [words[indF], words[indL]] = [words[indL], words[indF]];
  }

  const parsed = words.map(i => i === "i" ? "I" : i).join(" ")
  return parsed[0].toUpperCase() + parsed.slice(1)
}


console.log(replaceWords(
  // "I am the best"
  "I am better than him"
));