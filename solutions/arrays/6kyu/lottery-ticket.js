//link: https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript

function isLittleWin(arr){
    for(let i = 0; i < arr[0].length; i++){
      console.log(arr[0][i].charCodeAt());
      if(arr[0][i].charCodeAt() === arr[1]){
        return true;
      }
    }
  }
  
function bingo(ticket, win){
  let a = 0;
  ticket.forEach((el) => {
      if(isLittleWin(el)){
          a = a+1;
      }
  });
  if(a >= win){
    return 'Winner!';
  } 
  return 'Loser!';
}