//https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

function sortArray(arr) {
    const odds = arr.filter(x => x%2).sort((a, b) => a - b);
    return arr.map((el) => {
      if(el%2) { 
        return odds.shift()
      } else {
         return el
      }
    });
}
