/**
 * mediante el while for iterar cada una de las letras del string "fooziman"
 * debes anexar los caracteres de string al array result
 * ["f","o","o","z","i","m","a","n"] 
 *
 *
 * output => ["f","o","o","z","i","m","a","n"]
 */
let str = "fooziman";
let result = [];
let contador = 0;

while (contador < str.length){
    result.push(str.charAt(contador));
    contador++;
};
console.log(result);


//export result
module.exports = result;