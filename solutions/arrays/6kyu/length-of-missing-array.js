//https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

function getLengthOfMissingArray(arrayOfArrays) {
        if(arrayOfArrays === null ||  arrayOfArrays.length === 0){
            return 0;
        }
        for(let i = 0; i < arrayOfArrays.length; i++){
            if(arrayOfArrays[i] === null ||  arrayOfArrays[i].length === 0) {
                return 0;
            }
        }
        for(let i = 0; i < arrayOfArrays.length; i++){
            if(arrayOfArrays[i] === null) {
                return 0;
            }
        }
        let lengths = [];
        for(let i = 0; i < arrayOfArrays.length;i++) {
            lengths.push(arrayOfArrays[i].length);
        }
        lengths.sort((a,b) => {
           return a - b;
        })
        for(let i = 0; i < lengths.length;i++){
            console.log(lengths[i+1], lengths[i])
            if(lengths[i+1] - lengths[i] != 1){
                return lengths[i+1] - 1;
                
            }
        }
}