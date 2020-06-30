//https://www.codewars.com/kata/52859abdf8fc1b12e0000141

function flattenMap(map, arr = []) {
    console.log(map);
    let newMap = {};
    for (const key in map) {
      if(typeof map[key] === "object" && !Array.isArray(map[key]) && map[key] !== null){
        const obj = flattenMap(map[key], [...arr, key]);
        for(const k in obj){
          newMap[k] = obj[k];
        }
      } else {
         newMap[[...arr, key].join('/')] = map[key];
      }
    }
    return newMap;
}