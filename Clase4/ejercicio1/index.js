console.log('Hola aca estoy');
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
/*
let boton = document.getElementById("miBoton");
boton.addEventListener('click', ordenar())
*/

let a = document.getElementById("miId");

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
        a.innerHTML  = ``
        mostrar()
    }
    else {
        series.sort((a,b) => b.estreno - a.estreno)
        orden = 0;
        a.innerHTML  = ``
        mostrar()

    }
} 

mostrar()

