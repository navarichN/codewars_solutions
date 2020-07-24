//https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3/train/javascript


function makeLooper(str) {
  let state = 0;
  return function () {
    let letter = str[state];
    state += 1;
    if(state === str.length){
      state = 0;
    }
    return letter;
  };
}

var a = makeLooper('abc');
console.log(a())
console.log(a())