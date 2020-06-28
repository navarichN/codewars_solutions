//link: https://www.codewars.com/kata/array-dot-diff

function arrayDiff(a, b) {
    if(b.length < 1){
      return a;
    }
    let newArr = [];
    for(let i = 0; i < a.length;i++) {
        let NotInB = true;
        
        for(let j = 0; j < b.length;j++) {
            if(a[i] === b[j]){
                NotInB = false;
            }
        }
        
        if (NotInB) {
          newArr.push(a[i]);
        }
    }
    return newArr;
}