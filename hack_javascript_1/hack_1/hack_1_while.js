/**
 * mediante el loop while agregar los números 0,1,2,3,4,5
 * dentro del array result 
 * 
 * 
 * output => [0,1,2,3,4,5]
 */
let result = [];
let contador = 0;

while (contador < 6){
    result.push(contador);
    contador++;
}

//export result
module.exports = result;