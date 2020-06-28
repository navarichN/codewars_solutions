//link: https://www.codewars.com/kata/square-every-digit

function squareDigits(num){
    let str = String(num);
    return Array.from(str).map(el => Math.pow(el, 2)).join('')*1;
}