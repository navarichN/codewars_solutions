// https://www.codewars.com/kata/5831200eb812b8016d000094/train/javascript

function smartSum(...args){
    let sum = 0;
    args.forEach((el) => {
        if(!Array.isArray(el)) {
            sum += el;
        } else {
            sum += smartSum(...el);
        }
    })
    return sum;
}