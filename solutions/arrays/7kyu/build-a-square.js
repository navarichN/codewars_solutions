//link: https://www.codewars.com/kata/59a96d71dbe3b06c0200009c

function generateShape(int){
    let pluses = '';
    for(let i = 0; i < int; i++) {
        pluses += '+';
    }
    let str = '';
    for(let i = 0; i < int - 1; i++) {
        str += pluses + '\n'
    }
     return str += pluses;
}