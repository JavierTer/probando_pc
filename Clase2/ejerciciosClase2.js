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