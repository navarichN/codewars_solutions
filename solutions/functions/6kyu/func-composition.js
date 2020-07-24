//https://www.codewars.com/kata/5655c60db4c2ce0c2e000026/train/javascript

function compose(...funcs) {
    funcs.forEach((el) => {
      console.log(el);
    })
    return function(arg){
      console.log(arg);
        for(let fn of funcs){
           arg = fn(arg);
        }
      console.log(arg);
      return arg;
    }
}
  
function addOne(a) {
  return a + 1;
}

function multTwo(b) {
  return b * 2;
}

