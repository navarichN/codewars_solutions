//https://www.codewars.com/kata/596f72bbe7cd7296d1000029/train/javascript

function deepCount(a){
    let sum = 0;
    for(let el of a){
      sum += 1;
      console.log(sum);
      if(Array.isArray(el)){
        sum += deepCount(el);
      }
    }
    return sum;
}