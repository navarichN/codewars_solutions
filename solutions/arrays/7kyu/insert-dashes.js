//link: https://www.codewars.com/kata/insert-dashes

function insertDash(num) {
    let arr = String(num).split('');
    let newArr = [];
    for(let i = 0, j = 1; i < arr.length; i++, j++){
      if(Number(arr[i]) % 2 !== 0 && Number(arr[j]) % 2 !== 0 && i !== arr.length - 1){
        newArr.push(arr[i]);
        newArr.push('-');
      } else {
        newArr.push(arr[i]);
      }
    }
    let newStr = newArr.join('');
    return newStr;
}