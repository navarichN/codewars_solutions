//https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
    for(let i = 0; i < numbers.length; i++){
      for(let j = 0; j < numbers.length; j++){
        if(numbers[i] + numbers[j] === target && i!==j){
          return [i, j]
        }
      }
    }
}