//https://www.codewars.com/kata/555185132c0d4cca3d000197/train/javascript

function spyOn(func) {
  let argsSet = new Set;
  let countCall = 0;
  let resSet = new Set;
  function inner(...args) {
    for(let el of args) {
      argsSet.add(el);
    }
    countCall += 1;
    let result = func(...args);
    resSet.add(result);
    return result;
  }

  inner.callCount = () => countCall;
  inner.wasCalledWith = function(val) {
    return argsSet.has(val);
  };
  inner.returned = function(v) {
    return resSet.has(v);
  };
  return inner;
}
