
/* Tomar el ejercicio de series y, en vez de imprimir por consola, alimentar un html con el array.
Agregar un boton para mostrarlo de forma descendiente.
*/

let orden = 0;
const series = [
    {
        nombre : 'Sherlok Holmes',
        estreno : 2010,
        img: 'https://static.wikia.nocookie.net/doblaje/images/b/bd/Sherlock.png/revision/latest?cb=20220125235553&path-prefix=es'
    },
    {
        nombre : 'The good doctor',
        estreno : 2018,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbCvC8M7MUYwLl8uyOXvXtUk2akWZHfEWUZA&usqp=CAUttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQOvkykl7EHiNur_cjmBMaKSY94Q_fT1XLGg&usqp=CAU.wikia.nocookie.net/doblaje/images/b/bd/Sherlock.png/revision/latest?cb=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBp0yT-qzU5xTqxrkc25UlloPXPORB2kn4fQ&usqp=CAU&path-prefix=es'

    },
    {
        nombre : 'La ley de los audaces',
        estreno : 2020,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2oTEagD313RUTJYGsirwaAoZ-0tGBLeVeFw&usqp=CAU'

    },
    {
        nombre : 'Otra vida',
        estreno : 2021,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeSMhTDqKa2oZRf9_Wc4IygLR9-KGLFEpzoQ&usqp=CAU'
    
    },
    {
        nombre : 'La niniera',
        estreno : 1996,
        img: 'https://www.agendasalta.com.ar/public/images/noticias/6575-la-niniera-cumple-65-fue-abusada-sexualmente-lucho-contra-un-cancer-de-utero-y-su-marido-le-confeso-su-homosexualidad.webp'

    }
    
]


let a = document.getElementById("miId");
let miTitulo = document.getElementById("titulo");
let miFecha = document.getElementById("fecha");


/*
document.createElement("li") // crea 1 elemento en el DOM pero no lo agrega todavia, esta en memoria x el momento
document.appendChild(unNuevoElement) // sobre 1 elemento que ya tengamos referenciado del DOM podemos crear 1 elemento nuevo
*/

const mostrar = ()=>{
    for (let index = 0; index < series.length; index++) {
        const element = series[index];
        //console.log(element.nombre);
        //const li = document.createElement('li')
        //li.appendChild = `${element.nombre}`
        a.innerHTML  += `<li> ${index + 1 } - ${element.nombre} -- estreno: ${element.estreno}</li>`;
        a.innerHTML += `<img style="width: 300px; height: 300px;" src=${element.img}>`
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

function ponerFechaYHora() {
    let dato = new Date()
    miFecha.innerHTML = new Date();
    //miHora.innerHTML =  ` ${dato.getHours()}: ${dato.getMinutes()}` 
	
}


function mover(obj){
    obj.innerHTML = "ver en forma descendente"
}

function mout(obj){
    obj.innerHTML = "ver en forma ascendente"
}


ordenar()
ponerFechaYHora()
