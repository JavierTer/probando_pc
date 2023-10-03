console.log('Ejercicios de la clase 2');

/*1-Crear un metodo que asegure si un partido de futbol esta en condiciones de comenzar
    - En caso de no estar en condiciones, imprimir un informe con las que no se cumplen.
  
  2- Dado un array de series de tv, ordenar el mismo por año de estreno ascendente. Los objetos deben tener nombre y estreno como atributos.
*/

const condiciones = [
    {
        condicion : 'Debe haber pelota',
        valor : true
    },
    {
        condicion : 'Equipo 1 debe tener 11 jugadores',
        valor : true
    },
    {
        condicion : 'Equipo 2 debe tener 11 jugadores',
        valor : false
    },
    {
        condicion : 'Todos los jugadores debe estar anotados',
        valor : true
    },
    {
        condicion : 'Las condiciones climaticas deben ser buenas',
        valor : false
    }
    
]

const verificarCondiciones = function (condiciones) {
    /*Necesito recorrer el array de condiciones y comparar cada valor para revisar si se puede jugar o no, si no se puede jugar debo mostrar porque no osea q me lo guardo esa condicion
    en otro array para mostrarlo
    */

    let noSePuedeJugar = condiciones.filter(e => e.valor == false)

    if(noSePuedeJugar.length > 0)
    {
       console.log( `No es posible jugar porque:`);
       let indice= 1; 
       noSePuedeJugar.forEach(element => {
            console.log(`${indice}) ${element.condicion}`);
            indice++;
        });

    }
    else{
        console.log('Todo ok');
    }


}

verificarCondiciones(condiciones);

console.log('*************** Ejercicio 2 ******************');

/*4) Con el array de series, quiero eliminar un elemento segun su titulo sin modificar el array original.

5) Con el array de series, devolver otro array formado por elementos de tipo "Nombre(estreno)". 

6) hacer un metodo que reciba un array de strings y devuelva otro pasando todo a mayuscula. 
const array = ["a", "b"]
console.log(array.map(e=>e.toLocalUpperCase())); 

7) dado el array de condiciones del ejercicio 2, devolver otro con el siguiente formato: "si el valor es true, pulgar arriba, sino pulgar abajo."
*/

const series = [
    {
        nombre : 'Sherlok Holmes',
        estreno : 2010
    },
    {
        nombre : 'The good doctor',
        estreno : 2018
    },
    {
        nombre : 'La ley de los audaces',
        estreno : 2020
    },
    {
        nombre : 'Otra vida',
        estreno : 2021    
    },
    {
        nombre : 'La niniera',
        estreno : 1996
    }
    
]

const ordenarSeries = function (series,valor){
    let seriesOrdenadas = [...series]
    if(valor == '-'){
        console.log(seriesOrdenadas.sort((a,b) => b.estreno - a.estreno));
    }
    else if(valor == '+'){
        console.log(seriesOrdenadas.sort((a,b) => a.estreno - b.estreno));
    }
    else {
        console.log('El valor ingresado es incorrecto');
    }
}

//ordenarSeries(series, '+');

function eliminarSerie(nombreSerie){
    let serieBusc = series.filter(e=>e.nombre != nombreSerie)
    if(serieBusc.length > 0){
        console.log(`   Se ha eliminado la serie: ${nombreSerie} \ 
        Estas son las series que quedan disponibles:`); 
        serieBusc.forEach(e=>console.log(`${e.nombre} -  ${e.estreno}`));
    }
    else {
        console.log(`No existe una serie con el nombre ${nombreSerie}`);
    }
}

eliminarSerie('La niniera')


//5) Con el array de series, devolver otro array formado por elementos de tipo "Nombre(estreno)". 

const mapearSeries = function (array){
    //Resolucion en 1 linea.
    console.log("--------------------------------------");
    let seriesMapeadas = [...array.map(e=>`${e.nombre}(${e.estreno})`)];
            //Test que demuestra que MAP MODIFICA el array orignal. 
            /*
            let seriesMapeadas = [...array];
            console.log("las series copiadas tal cual es recibida como parametro, es una copia");
            console.log(seriesMapeadas);
            console.log("ahora las mapeo");
            seriesMapeadas = [...array.map(e=>`${e.nombre}(${e.estreno})`)];
            console.log("Muestro como quedan las series mapeadas, modificando el array");
            console.log(seriesMapeadas);
            console.log("y estas son las series originales sin modificarse, por eso fue necesario hacer la copia para no alterar el array original.");
            console.log(array);
            */
            
    
    return seriesMapeadas;
}

console.log(`Estas son las series mapeadas: ${mapearSeries(series)}`);

/*
6) hacer un metodo que reciba un array de strings y devuelva otro pasando todo a mayuscula. 
const array = ["a", "b"]
console.log(array.map(e=>e.toLocalUpperCase())); */
const arrayLetras = ["a", "b", "c", "d", "e",];

const pasarMayuscula = (array) => console.log([...array.map(e=>e.toUpperCase())]);

//Test
pasarMayuscula(arrayLetras);

//No se modifica el array original
console.log(`No se modifica el array orignal: ${arrayLetras}`);


