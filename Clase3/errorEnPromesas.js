

console.log("*** error en promesas ***");

 /*  
 Encerramos en un try la parte de la espera de las promesas y el console.log, como en Java.
Cuando 1 de las promesas falle, no sigue ejecutandose y tendremos el mensaje de error.
Comentamos el resolve del método getEnsalada(), al notener resolve lanza el reject y sale impreso en el error del catch.
*/

async function entregarComida(){
      
      console.log('Estamos preparando su pedido');

      const ensaladaPromise    =   getEnsalada();
      const hamburguesaPromise =   getHamburguesa();
      const bebidaPromise      =   getBebida();
    
     try {
        const [ensalada, hamburguesa, bebida] = await Promise.all([ensaladaPromise, hamburguesaPromise, bebidaPromise])
        console.log(`Su pedido de:  ${ensalada} , ${hamburguesa}  y ${bebida} esta listo`);

     } catch (error) {
        console.log('Hubo un problema con su pedido...' + error);
     }
     

}


//Las funciones que devuelven una promesa (que implementan una promesa) no es necesario ponerle async al principo. 
function getEnsalada() {
    return new Promise( 
      (resolve, reject) => 
          {
            setTimeout( ()=> 
            {
              //resolve('ensalada')                        --> COMENTADO PARA PROBAR EL REJECT
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



