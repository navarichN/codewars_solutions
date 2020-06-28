//link: https://www.codewars.com/kata/homogenous-arrays

function compare(arr){
    let a = typeof arr[0];
    for(let i = 0; i < arr.length; i++){
      if(typeof arr[i] === a){
        continue;
      } else {
        return false;
      }
    }
    return true;
}

function filterHomogenous(arrays) {
    let newArr = [];
      arrays.forEach((el) => {
        if(compare(el) && el.length > 0){
          newArr.push(el);
        }
      });
    return newArr;
}