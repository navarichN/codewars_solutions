//https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/solutions/javascript

function duplicateEncode(word){
    let arr = word.toLowerCase().split('');
    let newArr = [];
    arr.map((el) => {
    let count = 0;
      for(let a of arr){
        if(a === el) {
          count += 1;
        }
      }
      if(count !== 1){
        newArr.push(')');
      } else {
        newArr.push('(');
      }
    }) 
    return newArr.join('');
}