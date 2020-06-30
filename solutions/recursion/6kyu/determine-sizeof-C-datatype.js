//https://www.codewars.com/kata/577ce2c97a3dbd74b7000059/train/javascript

function sizeof(type) {
    const strings = {
        char: 1,
        short: 2,
        int: 2,
        long: 4,
        'long long': 8,
        'unsigned char': 1,
        'unsigned short': 2,
        'unsigned int': 2,
        'unsigned long': 4,
        'unsigned long long': 8,
        'float': 4,
        'double': 8
    }
    if(typeof type === 'string'){
        return strings[type];
    }
    if(type.type === 'struct'){
        let sum = 0;
        for(let key of type.members){
            sum += sizeof(key);
        }
        return sum;
    }
    if(type.members.length === 0){
        return 0;
    }
    let sizes = [];
    for(let i = 0; i < type.members.length; i++){
        sizes.push(sizeof(type.members[i]));
    }
    let bigest = Math.max(...sizes);
    return bigest;
}