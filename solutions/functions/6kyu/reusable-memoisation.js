//https://www.codewars.com/kata/5b773b698adeaeb6b80000df

function memo(fn){
    let map = new Map;
    return function(num) {
        if(!map.has(num)){
            const result = fn(num);
            map.set(num, result);
            return result;
        }
        return map.get(num);
    }
}