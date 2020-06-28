//link: https://www.codewars.com/kata/583203e6eb35d7980400002a

function countSmileys(arr) {
    const variants = [':)',';)',':-)',';-)',':~)',';~)',':D',';D',':-D',';-D',':~D',';~D'];
    return arr.filter(el => variants.includes(el)).length
}