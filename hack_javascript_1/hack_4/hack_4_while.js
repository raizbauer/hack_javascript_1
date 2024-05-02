/**
 * mediante el while for agregar los números 1,3,5,7
 * dentro del array result 
 * 
 * 
 * output => [1,3,5,7]
 */
let result = [];
let contador = 1;

while (contador <= 7){
    result.push(contador);
    contador += 2;
}
console.log(result);
//export result
module.exports = result;