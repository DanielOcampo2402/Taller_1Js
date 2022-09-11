/*2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de
acceso a las naves de guerra los cuáles reposan en la base de datos
central, para ello debe programar una función que permita recibir la
palabra clave de cada nave y separar imprimiendo solo el nombre del
piloto asignado a cada nave. 
*/
//Declara funcion para obtener el nombre
let obtenerNombre = codigo=> codigo.split(":")[0] + codigo.split(":")[1]

//Llamar funcion
let resultado = obtenerNombre(" ARQ2555: Sara Bel-Sun")
console.log(resultado);

let resultado2 = obtenerNombre(" ARQ2556: Nodin Chavdri")
console.log(resultado2);

let resultado3 = obtenerNombre(" ARQ2557: Finn")
console.log(resultado3);