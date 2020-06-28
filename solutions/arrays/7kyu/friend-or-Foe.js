//link: https://www.codewars.com/kata/55b42574ff091733d900002f

function friend(friends){
    let reallyFriends = friends.filter((name) => name.length === 4);
    return reallyFriends;
}