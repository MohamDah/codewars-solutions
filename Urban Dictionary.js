// https://www.codewars.com/kata/5631ac5139795b281d00007d/train/javascript

var WordDictionary = function () {
  this.words = []
};

WordDictionary.prototype.addWord = function (word) {
  this.words.push(word)
};

WordDictionary.prototype.search = function (word) {
  const regex = new RegExp(`^${word}$`)
  return this.words.some(w => regex.test(w))
};


const dict1 = new WordDictionary()
console.log(dict1.words)
dict1.addWord("word1")
console.log(dict1.words)
console.log(dict1.search("w..d."))