

console.log("*** probando promesas ***");

 /*Desestructuramos el array de promesas
    1- le debemos cambiar el nombre a las promesas en partticular para que se entienda
    que lo que mandamos al promise.all son efectivamente promesas. 
    2- desestructuramos el array de promesas.
    a cada uno de los objetos los asignamos en 1 variable.
    similar al spreed. nosotros sabemos que en el resultado 0 esta la ensalada. entonces le ponemos el nombre directamente y lo podemos usar como 1 variable.     
*/

async function entregarComida(){
      
      console.log('Estamos preparando su pedido');

      const ensaladaPromise    =   getEnsalada();
      const hamburguesaPromise =   getHamburguesa();
      const bebidaPromise      =   getBebida();

     //Se le saca el nombre a la variable y se pone directamente los valores con el nombre que queremos asignarle
     //en este caso hay q tener cuidado de saber el orden de las cosas que vienen. de todas formas queda màs entendible el codigo xq se entiene que es 1 proemsa en si y q no.
     const [ensalada, hamburguesa, bebida] = await Promise.all([ensaladaPromise, hamburguesaPromise, bebidaPromise])
     
     console.log(`Su pedido de:  ${ensalada} , ${hamburguesa}  y ${bebida} esta listo`);

}


//Las funciones que devuelven una promesa (que implementan una promesa) no es necesario ponerle async al principo. 
function getEnsalada() {
    return new Promise( 
      (resolve, reject) => 
          {
            setTimeout( ()=> 
            {
              resolve('ensalada')
              reject('No se pudo preparar la ensalada')
            }, 1000)
          }
      )  
    }

function getHamburguesa(){
    return new Promise( (resolve, reject) => {
        setTimeout( ()=> {
           resolve('HamburguesAAA')
           reject('No es posible realizar la hamburguesa')
        },
        2000)
    })  
}

 function getBebida() {
   
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve ("BEBIDAAA"),
                reject('No pudimos conseguir la bebida')
              }, 3000);
        }
    );
  }


//veo hasta el minuto 1:30
  entregarComida()



