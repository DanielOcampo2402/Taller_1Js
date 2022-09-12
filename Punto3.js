/*
3.La luna de Endor pierde temperatura día a día, para ello
hay que hacer un monitoreo constante, Cree una función de flecha que
permita calcular la temperatura media de la luna a partir de la
temperatura máxima y mínima de cada día 
*/

/*let temperaturas=[10,50,60,20,5] 
function calcularPromedioTemperatura(...temperaturas){
    let temperaturaMaxima=Math.max(...temperaturas)
    let temperaturaMinima=Math.min(...temperaturas)
    let promedio=(temperaturaMaxima+temperaturaMinima)/2;
    return(promedio)
}
console.log(`La temperatura promedio fue de: ${calcularPromedioTemperatura(...temperaturas)} °C`)
*/

//FUNCION FLECHA
let temperaturas=[10,50,60,20,5] 

let calcularPromedioTemperatura = (...temperaturas) => {

    let temperaturaMaxima=Math.max(...temperaturas)
    let temperaturaMinima=Math.min(...temperaturas)
    let promedio=(temperaturaMaxima+temperaturaMinima)/2;

    return(promedio)

}

console.log(`La temperatura promedio fue de: ${calcularPromedioTemperatura(...temperaturas)} °C`)