/**
 * mediante el map for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];

for(i = 1; i <= 7; i += 2 ){
    result.push(i)
}

let ls = result.map((el, idx, _result)=>{
    return result
})
console.log(result);
//export result
module.exports = result;