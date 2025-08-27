function solution(words, lastWord) {
  for (let i = 0; i < words.length; i++) {
    if (!lastWord || lastWord.at(-1) === words[i][0]) {
      const newWords = [...words];
      newWords.splice(i, 1);
      if (newWords.length === 0 || solution(newWords, words[i]))
        return true;
    }
  }
  return false;
}

console.log(
  solution(["excavate", "endure", "desire", "screen", "theater", "excess", "night"])
);