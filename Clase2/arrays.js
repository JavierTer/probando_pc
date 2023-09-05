console.log('este es el archivo arrays.js');


const miArray = [1,5,7,3,4,4,3, "hola"];


/*Para recorrer un array:

*/
for (let index = 0; index < miArray.length; index++) {
    const element = miArray[index];
    console.log(element);
}

//ForEach: aca esta el concepto de CALLBACK, el callback es PASAR 1 FUNCIÒN COMO PARAMETRO.
function add(a,b){
    return a+b;
}

//Definimos 1 funcion de prueba
function prueba (a,b, miFuncion) {
//si recibimos 1 funcion podemos ejecutarla dentro
console.log(miFuncion(a,b));
}


//como llamariamos a prueba
prueba(1,2,add);

//imprimimmos 
console.log(prueba(1,2,add));

//Al forEach tenees q pasarle 1 funciòn que espera 1 elmeneto., tmb en vez de usar la palabra elemento se puede usar x .
//x 1 tema de lectura se aconseja poner una palabra descriptiva.
console.log('Resultado de forEach');
//miArray.forEach((elemento) => {console.log(elemento);})

//esto lo q hace es MUTAR EL ARRAY ORIGINAL, CAMBIA
//miArray.forEach((elemento) => {console.log(elemento*2);})

//Otros metodos que iteran y manipulan cada elemento
/**Metodo FIND: le tenemos q pasar 1 funciòn que queremos hacer, siempre toma 1 elemento 
 * que es el q esta iterando, le tenemos q decir 1 condicion q siendo verdadera deja de iterar.
FIND DEVUELVE ALGO, si no encuentra devuelve INDEFINED. cuando usamos este metodo HAY Q PREGUNTAR X EL RESULTADO
XQ PUEDE HABER SALIDO SIN HABERLO ENCONTRADO
*/
const restultt= miArray.find(element => element == "hola")  
//Para preguntar x undefined
if(restultt){
    console.log('lo encontre!');
}
//o if(resultt != undefined)

// si tenemos 2 elementos iguales
/*FILTER, no corta la iteraciòn, agarra todo*/
const resultadoFilter = miArray.filter(e => e == 3);
console.log('resutlado de filter');
console.log(resultadoFilter);