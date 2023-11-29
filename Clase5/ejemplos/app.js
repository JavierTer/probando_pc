
const myVue = new Vue({
    el: "#app",
    //Data ahora lo haremos de una manera distinta. Ahora será una función que retorna un objeto.
    data: ()=>{
        return {
            //Dentro del return pondremos lo que poniamos la clase pasada, no cambia nada, a nosotros cnd empezamos a crear componentes - c/ compoente puede tener 1 sección de data.
            //Es info de cada componente, entonces si nosotros devolvemos siempre 1 obj estatico de data, se van a pisar entre componentes, entonces necesitamos una estructura que devuelva un obj
            texto: "Hola todos!", 
        }
    }
})

//min 15//