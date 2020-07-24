//https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript

function add(n){
  let count = n;
  function next(num){
    count += num;
    console.log(count);
    return next;
  }

  next[Symbol.toPrimitive] = () => count;

  return next;
}