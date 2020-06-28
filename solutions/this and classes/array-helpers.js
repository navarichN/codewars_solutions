//link: https://www.codewars.com/kata/525d50d2037b7acd6e000534

Array.prototype.square = function(){
    return this.map((el) => {
      return el * el;
    });
  }
  Array.prototype.cube = function(){
    return this.map((el) => {
      return el * el * el;
    });
  }
  Array.prototype.average = function(){
    let res = 0;
    this.map((el) => {
      return res += el;
    });
    return res / this.length;
  }
  Array.prototype.sum = function(){
    let res = 0;
    this.map((el) => {
      return res += el;
    });
    return res;
  }
  Array.prototype.even = function(){
    return this.filter((el) => {
      return el % 2 === 0;
    });
  }
  Array.prototype.odd = function(){
    return this.filter((el) => {
      return el % 2 !== 0;
    });
}