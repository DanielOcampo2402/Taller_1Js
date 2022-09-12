/*
6.Yoda el maestro jedi, necesita asignar a sus aprendices
Padawans 2 actividades dependiendo de la edad de ellos:
• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años
Inicialmente, se debe programar una función que asocie los datos de:
{nombre, planeta, edad y estatura} de 1 Padawan a un objeto y una vez
este objeto sea creado se debe llamar a una función secundaria que
clasifique y muestre en consola la actividad asignada al Padawan

*/

/*function matricularPadawan(nombre,edad,clasificarPadawan){
    let padawan={
        nombre:nombre,
        edad:edad
    }
    clasificarPadawan(padawan.edad)
}
matricularPadawan("juan",20,function(edad){
    if(edad<15 && edad>=15){
        let mensaje="El padawan fue asigando a Manejo de fuerza"
        console.log(mensaje)
    }else{
        let mensaje="El padawan fue asignado a Sable de luz"
        console.log(mensaje)
    }
})
*/


//FUNCION FLECHA
let matricularPadawan = (nombre,edad,clasificarPadawan) => {
    let padawan={
        nombre:nombre,
        edad:edad
    }
    clasificarPadawan(padawan.edad)
}

matricularPadawan("Daniel",16,function(edad){
    if(edad<15 && edad>=15){
        let mensaje="El padawan fue asigando a Manejo de fuerza"
        console.log(mensaje)
    }else{
        let mensaje="El padawan fue asignado a Sable de luz"
        console.log(mensaje)
    }
})