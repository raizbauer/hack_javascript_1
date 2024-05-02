/**
 * mediante el loop while agregar los números 5,4,3,2,1
 * dentro del array result 
 * 
 * 
 *  output => [5,4,3,2,1]
 */
let result = [];
let contador = 5;

while (contador >= 1){
    result.push(contador);
    contador--;
}
//export result
module.exports = result;