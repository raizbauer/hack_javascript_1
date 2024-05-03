/**
 * mediante el loop while agregar los números 7,5,3,1
 * dentro del array result 
 * 
 * 
 * output => [7,5,3,1]
 */
let result = [];
let contador = 7;

while (contador >= 1){
    result.push(contador);
    contador -= 2;
}
console.log(result);
//export result
module.exports = result;