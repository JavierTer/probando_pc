console.log("probando el 1er cambio en la nueva pc");
//dejo commiteado localmente esto
//veo hasta el min 2:29
console.log("probando nvo log");
console.log("prueba cambiando texto");
const numero = 1;

console.log(numero);

//Formas de escribir funciones
//1
function saludar () {
    //este metodo devuelve un booleano.
    console.log(Array.isArray([]));
}

//se puede guardar en una constante esta funcion
const saludo = saludar()

//usando return
function saludar2 (nombre) {
    return `Hola ${nombre}`
}

console.log(saludar2("Javi"));


//2da forma de escribir funciones
//guardarla en 1 constante, no lleva nombre, es 1 constante que tiene como valor una funcion.
//

const gritar = function(){
    console.log("ey!!!");
}

//para ejecutarlo es de la misma manera
gritar()

//3ra forma arrow funcion
//ya no necesitamos la palabra function

const gritarArrowFunction = () => {
    console.log("ey con arrow");
}

//si tenemos 1 sola linea no hace falta poner las llaves.
const gritarArrowSinLlaves = () => console.log("hola en 1 linea");

//si tenemos 1 sola sentencia tampoco va el return
//ej , funcion anonima
const ej = (nombre) => `Hola ${nombre}`
//podriamos sacarle los parentesis si tenemos 1 solo parametro quedando asi: 
// const ej = nombre => `Hola ${nombre}`


//Tambien puede pasar que podemos encontrar en codigos una funcion sin un nombre directamente, sobre la marcha nos encontramos la sig linea:
// (nombre) => `Hola ${nombre}` 
//esto es una FUNCION ANONIMA , q se usa en ese momento especifico, x eso no interesa tenerla con nombre.

//veo hasta el minuto 54:12