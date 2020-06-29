//https://www.codewars.com/kata/569d488d61b812a0f7000015

function dataReverse(data) {
    let arr = [];

    for(let i = data.length; i > 0; i -= 8) {
        arr.push(data.slice(i - 8, i))
    }

    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      arr[i].forEach((el) => {
        newArr.push(el);
      });
    }
    return newArr;
}