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




Hacer una app usando Vue.js que consuma un servicio sobre criptomonedas.
Presentar la lista ordenada inicialmente por ranking, con la posibilidad de ordenar tambien por nombre.
Destacar las 3 primeras segun ranking usando clases de estilos dinamicas.
mostrar un indicador segun la propiedadchangePercent24Hr. Si es positivo, mostrar FLECHA ARRIBA sino FLECHA ABAJO.
bonus: darle estilo verde o rojo solamente al indiciador segun si es positivo o negativo.

---Usar computed para ordenar, pensar estrategia para eso , hay 2 tipos de ordenamiento y 1 por defecto
recordar q las computed actuan si cambia el valor de alguna propiedad.
alguna de esas deberemos usar , esa propiedad quizás pueda tener 1 valor inicial
es como q haya un valor ascendente o descendente y segun esa propiedad actua por default.
---
*/

const myVue = new Vue({
el: "#app",
data: () => {
    return {
        criptomonedas: [],
        texto: "Ejercicio",
        //valorDeOrden: 1
    }
},
computed: {
   
    
},
methods: { 
    orderByName(){
        //if (this.valorDeOrden == 0) {
            console.log("se activo computed");
            this.criptomonedas.sort((a,b) => a.name - b.name)
            //this.valorDeOrden = 1;
        //}
        //return this.criptomonedas

    },
    orderByRank(){
        //if (this.valorDeOrden == 1) {
            console.log("se activo computed de rank");
            this.criptomonedas.sort((a,b) => a.rank - b.rank)
            //this.valorDeOrden = 0;
        //}
        //return this.criptomonedas
    }
},
async created(){
    console.log("Paso por CREATED");
    const limite = 10;

    const result = await fetch(`https://api.coincap.io/v2/assets?limit=${limite}`)
    const data =   await result.json()

    this.criptomonedas = data.data
    console.log(this.criptomonedas);
},
mounted(){

}
})