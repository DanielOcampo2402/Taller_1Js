/*
7 Han solo y Chewbacca deben infiltrarse en el planeta
yavin4 para robar uno de los planos de una de las 10 estrellas de la muerte,
como distractor el imperio ha creado planos falsos y se tiene el dato de
que el número de serie de estos planos falsos comienza por encima del
número 10; es decir todos los planos falsos tienen números de serie
consecutivos comenzando desde el #11. SOLO si se obtiene un plano 
*/

/*
function robarPlano(id,despegarNave) {
    if(id>0 && id<=10){
        let mensaje="Nos robamos el plano " + id
        despegarNave(mensaje,true)
    }else {
        let mensaje="Nos robamos el plano fake"
        despegarNave(mensaje,false)
    }
}
robarPlano(5,function(mensaje,bandera){
    console.log(mensaje)
    if(bandera){
        console.log("Despegando...")
    }else{
        console.log("No podemos despegar!")
    }
})
*/

//FUNCION FLECHA
let robarPlano = (id,despegarNave) => {
    if(id>0 && id<=10){
        let mensaje="Nos robamos el plano " + id
        console.log(mensaje)
        despegarNave(true)
    }else {
        let mensaje="Nos robamos el plano fake"
        console.log(mensaje)
        despegarNave(false)
    }
}
//Operador ternario
robarPlano(5,bandera => bandera ? console.log("Despegando...") : console.log("No podemos despegar!"))
