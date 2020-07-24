//https://www.codewars.com/kata/5452209f699b534c67000cdf

function frequency(arr, options = {}) {
    if(options.criteria) {
      console.log('yes');
      const criteria = options.criteria;
      
    }
    const compareTo = options.compareTo || function(x, y) {
      return x < y ? -1 : 1;
    };
    console.log(arr, options)
    let map = new Map;
    for(let key of arr) {
        if(!map.has(key)){ 
            map.set(key, 1);
        } else {
            map.set(key, map.get(key) + 1);
        }
    }
    return Array.from(map).sort((a, b) => compareTo(a[0], b[0]));
    // [ [ 'Peter', 3 ], [ 'Anna', 2 ], [ 'Rose', 1 ] ]
}

function alphabeticalCompareTo(value1, value2) {
    if (String(value1) < String(value2)) {
      return -1;
    } else if (String(value1) > String(value2)) {
      return 1;
    } else {
      return 0;
    }
}

var persons = [
  {name: 'Peter', profession: 'teacher'},
  {name: 'Michael', profession: 'teacher'},
  {name: 'Anna', profession: 'scientific'},
  {name: 'Rose', profession: 'scientific'},
  {name: 'Anna', profession: 'scientific'},
  {name: 'Anna', profession: 'politician'}
];
console.log(persons[0].profession)
console.log(frequency(persons, {criteria: profession, compareTo: alphabeticalCompareTo}));