/*METODO SORT
Podemos llamarlo con el .sort() y funciona
*/

const miArray = ['a','c','d'];

//Para strings sin ningun parametro funciona.
console.log(miArray.sort());

//En numeros compara como si fuesen strings, ordena como el codigo ASCCI , esto entonces no sirve para nùmeros.

const miArrayNumeros = [10,5,3];
console.log(miArrayNumeros.sort());

/*Debemos manejar nosotros el ordenamiento pasandole una funciòn diciendole como queremos ordenarlo.
Esta funciòn en vez de esperar que se devuelve 1 booleano, espera q x cada elemento le vayamos diciendo
si va ordenado antes o dps. AL ESTILO JAVA.
RESULTADO NEGATIVO O POSITIVO.

*/
console.log(miArrayNumeros.sort((A,B) => A - B));

/*Como hariamos como objeto ? 
Segun lo q comparemos podemos hacer lo que queramos. en el array de personas podriamos ordenarlo por nombre.
Debemos comparar las propiedades.
*/

//SORT MUTA EL ARRAY ORIGINAL
//Y TAMBIEN DEVUELVE 
//entonces en este caso si no queremos mutar, tenemos que usar el spreed
//1-creamos 1 nvo array



//poner y sacar elementos
miArray.push('z');
miArray.pop () //elimina el ultimo
miArray.shift()//elimina el 1ro
miArray.unshift('e');

//veo hasta 2:25


