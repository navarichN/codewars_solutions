//https://www.codewars.com/kata/5894318275f2c75695000146/train/javascript

function deleteDigit(n) {
    let arr = String(n).split('');
    let newArr = [];
    arr.map((el) => {
      let insideArr = [];
      let count = 0;
      for(let dig of arr){
        if(dig === el && count !== el){
          count = el;
          continue;
        }
        insideArr.push(dig);
      }
      newArr.push(Number(insideArr.join('')));
    });
    return Math.max(...newArr);
}