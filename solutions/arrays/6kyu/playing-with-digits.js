//link: https://www.codewars.com/kata/playing-with-digits

function digPow(n, p) {
    let str = String(n);
    let sum = 0;
    for(let i = 0; i < str.length;i++) {
        sum += Number(str[i]) ** p;
        p++;
    }
    if(sum % n === 0) {
        return sum / n;
    } else {
      return -1;
    }
}