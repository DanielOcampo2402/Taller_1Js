/*1.Yoda el maestro jedi, necesita enseñar a sus aprendices
Padawan a calcular la distancia a la que cualquiera de los planetas de la
ruta N-14 pertenecientes a la ruta comercial de la federación
intergaláctica, se encuentra del planeta NABOO. 
*/


/*       FUNCION TRADICIONAL
let cordenadax1=0;
let cordenadax2=50;
let cordenaday1=0;
let cordenaday2=-70;
let restax=cordenadax2-cordenadax1;
let restay=cordenaday2-cordenaday1;
let potenciax=Math.pow(restax,2);
let potenciay=Math.pow(restay,2);
let sumatoria=potenciax+potenciay;
let distancia=Math.sqrt(sumatoria);
//SALIDA
console.log("La distancia del planeta Yavin-4 a Naboo es: "+distancia+" UA")*/

//Declara funcion para calcular distancia entre 2 putos

let CalcularDistancia = (x1,y1,x2,y2)=>(Math.sqrt(Math.pow(x2 - x1,2)+ Math.pow(y2 - y1,2)))
 

//Llamar la funcion
let distancia = CalcularDistancia(0,0,12,0)
console.log(`La distancia calculada fue ${distancia}`)