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

//DEFINIMOS 1 OBJETO 
//las llaves nos definen el AMBITO de un objeto, para una funciòn las llaves definen el CUERPO de la funcion
//const miObjeto = {};

//Las propiedades de un objeto las definimos como CLAVE Y VALOR
/*
const miObjeto = {
    materia : "NT2",
    cuatrimestre : 2,
    saludar: (nombre) => `Bienvenido ${nombre} a ${materia}`
}
// console.log(miObjeto.saludar("Pepe")); //esto tira error porque con la notacion de las arrow function, no reconoce
a materia dentro del ambito del objeto, entonces hay que cambiar la notacion de como escribimos la function. materia "dice no esta definido"
el ambito en las funciones, cuando hacemos referencia a materia es como si pusieramos this.materia, y nosotros 
nos queremos refereir al mismo ambito del objeto, LAS FUNCIONES ARROW NO TIENEN ESE AMBITO.

*/
// Arrays
const miArray = ["uno", "dos", "tres"];
miArray.push("cuatro")
console.log(miArray);

/*Para que reconozca el ambito del objeto, se debe usar esta notaciòn en las funciones.
en este caso sigue siendo una funcion anonima, saludar es el nombre de una propiedad del objeto, 
la funciòn en si no tiene nombre.*/
const miObjeto2 = {
    materia : "NT2",
    cuatrimestre : 2,
    saludar: function (nombre) {return `Bienvenido ${nombre} a ${this.materia}`}
}

console.log(miObjeto2.saludar("Pepe"))