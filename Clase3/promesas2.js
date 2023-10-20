/* a partir de 1:32 NUEVA NOTACIÓN DE PROMESAS
en la version 2007 se introduce el concepto ASYNC - AWAIT.
*/

console.log("*** probando promesas ***");

/**Tenenmos que hacer 1 funcion que va a entregar la comida 
 * En esta funciòn vamos a traernos 3 cosas
 * Al final del metodo se va a imprimir con 1 log.
*/

/*Se eliminan las palabras reservadas then y catch y se utiliza antes de la funcion la palabra AWAIT*/
async function entregarComida(){
      
      console.log('Estamos preparando su pedido');

      const ensalada    =  await getEnsalada()
      const hamburguesa =  await getHamburguesa();
      const bebida      =  await getBebida();

      console.log(`Su pedido de: ${ensalada} , ${hamburguesa}  y ${bebida} esta listo`);
}


//Las funciones que devuelven una promesa (que implementan una promesa) no es necesario ponerle async al principo. 
function getEnsalada(){
    return new Promise( (resolve, reject) => {
        setTimeout( ()=> {
          resolve('EnsaladAAA')
          reject('No se pudo preparar la ensalada')
        }, 5000)
      })  
    }

function getHamburguesa(){
    return new Promise( (resolve, reject) => {
        setTimeout( ()=> {
           resolve('HamburguesAAA'),
           reject('No es posible realizar la hamburguesa')
        },
        5000);
    })  
}

 function getBebida() {
   
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve ("BEBIDAAA"),
                reject('No pudimos conseguir la bebida')
              }, 2000);
        }
    );
  }


//veo hasta el minuto 1:30
  entregarComida()



