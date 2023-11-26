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


CÓDIGO JS:

new Vue({
    el: "#app",
    data: {
        miTexto: "Hola mundo"
    }
})



CÓDIGO HTML


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="app.js"></script>


</head>
<body>
    <div id="app">Probando VUE</div>
    <h1>{{miTexto}}</h1> // lo que esta dentro del la notación {{}} es "interpretado" y es lo que trae del archivo js. lo que esta por fuera de las llaves es como si escribieramos en el html
</body>
</html>

vi hasta el min 2:39


*/


