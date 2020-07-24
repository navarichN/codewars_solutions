//https://www.codewars.com/kata/535e88e608035176670014b8/solutions/javascript

function detectInt(...args) {
    for(let i = 1; ; i++){
        if(args.every((fn) => fn(i))){
            return i;
        }
    }
}