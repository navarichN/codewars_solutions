//https://www.codewars.com/kata/583710f6b468c07ba1000017/train/javascript

function proofread (str) { 
    let arr = str.toLowerCase().split('');
    arr[0] = arr[0].toUpperCase();
    for(let i = 1; i < arr.length - 2; i++){
      if(arr[i] === '.'){
        arr[i+2] = arr[i+2].toUpperCase();
      }
    }
    
    let newStr = arr.join('').replace(/ie/g, 'ei');
    
    return newStr;
} 