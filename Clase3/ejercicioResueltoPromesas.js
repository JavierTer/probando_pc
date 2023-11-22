/**
 * 3.1) Generar una aplicacion donde podamos poner a correr a 3 competidores(darles un nombre) y calcular como queda el podio de competicion.
    La accion de correr de cada uno tendra que tardar un tiempo aleatorio entre 3 y 10 segundos.
    Como no podemos saber cuanto tardará cada uno, tendremos que hacer uso de Promesas y manejarlas para informar el podio.
    Modificar la aplicacion para una maraton de 20 personas.
    
    Nota: no se olviden de generar un commit en sus repositorio por cada ejercicio que finalizan.

 */

 /**
 * App de competición
 */
 const competidores = ['juancito', 'pepito', 'cachito', 'jorge', 'carlos', 'javier', 'veronica', 'maria', 'mariela']
// Paso 1
 async function inicio(competidores) {
     console.log('inicio...');
     const ganadores = cambios(competidores)
     try {
       let resultado = await Promise.all(ganadores);
       resultado = determinarGanador(resultado)
       //console.log(resultado);
        console.log('Estos son los competidores');
        console.log(competidores);
     } catch (error) {
       console.log(error);

     }
 }

  //Paso 2 
  // Esta función recibe un array de Strings, genera una copia e itera esa copia, en la que a cada elemento lo pisa llamando a la función generarCorredor()
  //Return : un array de objetos
  const cambios = (competidores)=>{
    const nuevo = [...competidores]
    for (let i = 0; i < nuevo.length; i++) {
        nuevo[i] = generarCorredor(nuevo[i])
    }
   
return nuevo
};
 

//Paso 3
  // Esta función recibe un String, declara una variable a la que le asigna un tiempo(expresado en miliseguandos) a través de la funcióin generarTiempo().
  // Luego genera un objeto con el String recibido por parametro y el tiempo que retorna la función generarTiempo().
    function generarCorredor(nombre){
        const tiempo = generarTiempo()
        corredor = {nombre, tiempo} // esta linea anteriormente la tenia corredor = {nombre: nombre, tiempo: tiempo} FUNCIONA IGUAL XQ LA CLAVE TIENE EL MISMO NOMBRE QUE VALOR, SI X EJ LLEGARA X PARAMETRO "CORREDOR" YA NO FUNCIONARIA
        //console.log(corredor);
        return new Promise((resolve, reject) => {
            resolve(corredor)
/*
            if(corredor.tiempo > 5000) {
                reject(`El corredor ${nombre} con tiempo ${tiempo} no clasificó a la siguiente etapa`)

            }else {
                resolve(corredor)

            }*/
        })
    }


 //Paso 4
    // Esta función retorna un número aleatorio entre 3 y 10 milisegundos.
    function generarTiempo(){
        let min = 3000;
        let max = 10000;

        let x = Math.floor(Math.random()*(max-min+1)+min);
        return x
    }


 function determinarGanador(array){
     //const copia = [...array].sort((a,b)=> a.tiempo - b.tiempo);
     array.sort((a,b)=> a.tiempo - b.tiempo);
     array.forEach((corredor, indice) => {
         console.log('---------------------------------------------------------------------------------------------------------');
         if (indice <= 2) {
             console.log(`***** ¡¡¡ El corredor ${corredor.nombre.toUpperCase()} llego en la posición ${indice + 1} con un tiempo de ${corredor.tiempo} !!! ***** (${indice + 1})`);
         }
        
         else{
             console.log(`El corredor ${corredor.nombre} llego en la posición ${indice + 1} con un tiempo de ${corredor.tiempo}`);
 
         }
     })
      
 }

 

 

 

 
 console.log('---------------------------');
 
 console.log(inicio(competidores));