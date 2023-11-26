console.log("hola aca estoy");


/*Hacemos un new de 1 objeto, y a ese constructor hay que pasarle 1 objeto.
La clase Vue la entiende xq nosotros agregamos el script en el html, y adentro esta esa clase.
el constructor que le pasemos por parametro es en realidad 1 obj de configuracion, al cual hay que pasarle varios parametros.
Palabras reservadas (keys):
el (es de elemento), aca le vamos a tener que decir el id de 1 elemento , como hicimos la version de js puro, lo ibamos a buscar con el getElementById, la diferencia es que aca 
vue se encarga. entonces es similar.
Nosotros en el html le habiamos puesto al div como id app, asi que eso es lo que le pasamos para identificarlo , co nla diferencia que le tenemos que agregar un #.
Todo lo que pase dnetro del div queda en manos de Vue.

Ademas, nosotros tendremos un objeto, que tiene propiedades y métodos, ese elemento se llama DATA y el valor por ahora es un objeto (ahi esta todo el negocio que nosotros queremos hacer.)
este obj es 1 objeto contenedor de propiedades, y vue las convierte en OBSERVABLES, las podemos usar en el html y vue las escucha constantemente viendo los cambios en el html.


*/
const miVue = new Vue({
    el: "#app",
    data: {
        miTexto: "Hola mundo", //Esto es reactivo. Esta escuchandose.
        contador: 0,
        nombreUsuario: null,
        miArray: [1,2,4,6,3],
        series : [
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
                nombre : 'La niñera',
                estreno : 1996,
                img: 'https://www.agendasalta.com.ar/public/images/noticias/6575-la-niniera-cumple-65-fue-abusada-sexualmente-lucho-contra-un-cancer-de-utero-y-su-marido-le-confeso-su-homosexualidad.webp'
        
            }
            
        ]
    },
    methods: {
        cambiarTexto(){
            //El this hace referencia a la instancia de Vue, y lo necesitamos para 
            //propiedades y para otros métodos.
            if(this.nombreUsuario != null) {
                this.miTexto = "Hola " + this.nombreUsuario
                this.contador++;
                console.log(this.contador);
    
            }
        },
        sacarUltimo(){
            this.miArray.pop();
        }
    }
})

