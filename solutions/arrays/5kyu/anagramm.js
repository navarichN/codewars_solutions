//https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

function anagrams(word, words) {
    let sortWord = word.split("").sort().join("");
    let anagrams = words.filter((str) => {
      return sortWord.includes(str.toLowerCase().split("").sort().join(""));
    });
    return anagrams;
}