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
        nombre : 'La niñera',
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
    let seriesProvisorias = [...series]
    let serieBusc = seriesProvisorias.find(e=>e.nombre == nombreSerie)
    if(seriesProvisorias.find(e=>e.nombre == nombreSerie)){
        seriesProvisorias.unshift(nombreSerie)
        console.log(serieBusc);
        console.log(seriesProvisorias);

    }

}

eliminarSerie('La niñera')