

console.log("*** Metodos de promesas ***");

 /*Metodos  de promesas
    ^Promise.race(): devuelve la 1er promesa que se resuelve satisfactoriamente.
 */

async function entregarComida(){
      
      console.log('Estamos preparando su pedido');

      const ensaladaPromise    =   getEnsalada();
      const hamburguesaPromise =   getHamburguesa();
      const bebidaPromise      =   getBebida();

     /*Este método lo testie cambiando el valor de los segundos del timeOout, siempre devuelve la promesa que primero termina, aunque el hilo tarda lo que 
     tarda la ultima promesa.
     */ 
     const primerPromesa = await Promise.race([ensaladaPromise, hamburguesaPromise, bebidaPromise])
     
     console.log(`Lo primero que esta listo es:  ${primerPromesa} `);

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
            }, 8000)
          }
      )  
    }

function getHamburguesa(){
    return new Promise( (resolve, reject) => {
        setTimeout( ()=> {
           resolve('HamburguesAAA')
           reject('No es posible realizar la hamburguesa')
        },
        9000)
    })  
}

 function getBebida() {
   
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve ("BEBIDAAA"),
                reject('No pudimos conseguir la bebida')
              }, 1000);
        }
    );
  }


//veo hasta el minuto 1:30
  entregarComida()