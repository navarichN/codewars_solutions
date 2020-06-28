//link: https://www.codewars.com/kata/shortest-word
function findShort(s){
    s = s.split(' ');
    let short = 10;
    for(let i = 0; i < s.length; i++){
      if(s[i].length < short){
        short = s[i].length;
      }
    }
    return short;
}