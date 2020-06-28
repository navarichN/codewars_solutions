// link: https://www.codewars.com/kata/list-filtering
function filter_list(l) {
    return l.filter((el) => {
     return typeof el === 'number';
    })
}