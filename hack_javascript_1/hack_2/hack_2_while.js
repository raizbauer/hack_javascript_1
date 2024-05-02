/**
 * mediante el while for agregar los números 1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [1,2,3,4,5]
 */
let result = [];
let contador = 1;

while (contador < 6){
    result.push(contador);
    contador++;
}

//export result
module.exports = result;