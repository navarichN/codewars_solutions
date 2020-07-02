//https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

function list(persons){
    const names = [];
    let str = '';
    for(let i = 0; i < persons.length; i++) {
        names.push(persons[i].name);
    }
    console.log(names);
    if(persons.length === 0) {
        return '';
    }
    if(persons.length === 1) {
        return names[0];
    }
    for(let i = 0; i < names.length - 2; i++) {
        str += names[i] + ', ';
    }
    str += names[names.length - 2] + ' & ' + names[names.length - 1];
    return str;
}