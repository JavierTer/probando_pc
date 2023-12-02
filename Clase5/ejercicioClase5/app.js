console.log("Probando ejercicio 5");
/*
consultaremos 1 servicio que devuelve 1 lista con criptomonedas
La idea es mostrar la lista de criptos y poder ordenar
por diferentes propiedades.
Pensar el ordenamiento (no con sort con js puro), sino como 
vimos en la clase de hoy.
Hay 1 ranking que ya esta ordenado por capitalización
Hay 2 botones (name y ranking), dependiendo que boton se 
toque es como hay que ordenarlo.
El podio tienen que tener una diferenciado como 1 clase 
que se vean mas grandes
y ademas mostrar 1 atributo que sea flecha arriba o abajo 
usando esa propiedad tiene q tener una flecha.
*/

const myVue = new Vue({
el: "#app",
data: () => {
    return {
        criptomonedas: [],
        texto: "Ejercicio"
    }
},
computed: {
    uno(){

    }
},
created(){

},
mounted(){

}
})