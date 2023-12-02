
const myVue = new Vue({
    el: "#app",
    //Data ahora lo haremos de una manera distinta. Ahora será una función que retorna un objeto.
    data: ()=>{
        return {
            //Dentro del return pondremos lo que poniamos la clase pasada, no cambia nada, a nosotros 
            //cnd empezamos a crear componentes - c/ compoente puede tener 1 sección de data.
            //Es info de cada componente, entonces si nosotros devolvemos siempre 1 obj estatico de 
            //data, se van a pisar entre componentes, entonces necesitamos una estructura que devuelva 
            //un obj.
            
            texto: "Hola todos!", 
            //hacemos 1 array vacio xq necesitaremos datos 
            personas: [],
        }
    },
    //Se le puede poner el async al "hook" created() , xq como necesitamos esperar la información 
    //con el fetch, es necesario ponerle el async
    async created(){
        console.log('Created...');
        /*Fetch: es nativa de js.
        Es un método dnd se le pasa una URL y esto (guardandolo en una constante) nos devuelve infor
        macion.
        siempre para arriba hay que ir haciendo el await - async cada vez qwue usamos una funcion
        asincronica.
        */
       const result = await fetch("https://rickandmortyapi.com/api/character/1,2,3")
       //la info finalmente la tenemos cuando a ese resultado, llamamos al método .json() que 
       //convierte el resultado en un json.
       //es decir el fetch, devuelve una promesa, y esa promesa cuando se resuleve, recien ahi, 
       //hacemos un .json() que es OTRA PROMESA.
       //si lo hacemos en una sola linea , no va a funcionar.

        //el json lo que hace es que nosotros tengamos solo los datos del objeto y saca toda la otra info de los headers del request x ej.
       const data = await result.json()

       //en este punto tenemos la información, pero falta 1 paso....
       //vemos con log que hay en data
       console.log(data[0]);

       /*Aca relacionamos los datos obtenidos de la api, con nuestro array personas.*/
       this.personas = data;
       console.log(this.personas);

    },
    mounted(){
        console.log('ahora este es el Mounted');
    }
})

