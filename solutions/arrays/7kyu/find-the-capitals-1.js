//link: https://www.codewars.com/kata/find-the-capitals-1

function isCapitalLetter(letter){
    if(letter.toUpperCase() === letter){
        return true;
    }
    return false;
}

var capitals = function (word) {
    let newArr = [];
    for(let i = 0; i < word.length; i++) {
        if(isCapitalLetter(word[i])){
            newArr.push(i);
        }
    }
    return newArr;
};