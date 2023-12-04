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
        texto: "Criptomonedas",
        valorDeOrden: true
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
    console.log("soy mounted...");
   
    
},
computed: {
    verificar() {
        this.criptomonedas.map(e => {
            if(e.changePercent24Hr > 1) {
            e.changePercent24Hr = '⬆'
        }else {
            e.changePercent24Hr = '⬇'
        }
    })                
    },
    orden(){
        if(this.valorDeOrden == true){
            this.texto = `${this.texto}:"Ranking descendiente"`
            
            return this.criptomonedas.sort((a,b) => a.rank - b.rank);

        }else {
            this.texto = `${this.texto}:  "Ranking ascendente"`

            return this.criptomonedas.sort((a,b) => b.rank - a.rank);

        }
    }
},
methods: { 
    orderByName(){
            this.texto = "Criptomonedas"   
        console.log("ordenado por nombre");
           this.texto = `${this.texto}: "Ordenado por Nombre"`
           return this.criptomonedas.sort((a ,b) => a.name.localeCompare(b.name))

            

    },
    orderByRank(){
        this.texto = "Criptomonedas"
        this.valorDeOrden = !this.valorDeOrden;
        this.orden
            console.log("ordenado por ranking");
            console.log(this.criptomonedas[9].rank)
    }
}
})