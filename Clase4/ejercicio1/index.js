
/* Tomar el ejercicio de series y, en vez de imprimir por consola, alimentar un html con el array.
Agregar un boton para mostrarlo de forma descendiente.
*/

let orden = 0;
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


let a = document.getElementById("miId");
let miTitulo = document.getElementById("titulo");

/*
series.forEach(element => {
    a.innerHTML= `<li> ${element.nombre} </li>`
})


*/

const mostrar = ()=>{
    for (let index = 0; index < series.length; index++) {
        const element = series[index];
        //console.log(element.nombre);
        //const li = document.createElement('li')
        //li.appendChild = `${element.nombre}`
        a.innerHTML  += `<li> ${index + 1 } - ${element.nombre} -- estreno: ${element.estreno}</li>`;
    }
}

function ordenar () {
    console.log('aca esta la función ordenar');
    if(orden == 0){
        series.sort((a,b) => a.estreno - b.estreno)
        orden = 1;
        miTitulo.innerHTML = `Estas son tus series ordenadas en orden cronologico por año de estreno`
        a.innerHTML  = ``
        mostrar()
    }
    else {
        series.sort((a,b) => b.estreno - a.estreno)
        orden = 0;
        miTitulo.innerHTML = `Estas son tus series ordenadas en forma descendente por año`
        a.innerHTML  = ``
        mostrar()

    }
} 

mostrar()

