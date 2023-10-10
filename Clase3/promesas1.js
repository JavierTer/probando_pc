console.log("*** probando promesas ***");

/**Tenenmos que hacer 1 funcion que va a entregar la comida 
 * En esta funciòn vamos a traernos 3 cosas
 * Al final del metodo se va a imprimir con 1 log.
*/

function entregarComida(){
    const ensalada =  getEnsalada();
    const hamburguesa =  getHamburguesa();
    const bebida =  getBebida();

    console.log(`Su pedido de: ${ensalada} , ${hamburguesa}  y ${bebida} esta listo`);
}

function getEnsalada(){
    let ensalada = 'Estamos preparando la ensalada';
    setTimeout(() => {
        ensalada = 'ENSALADA'
        console.log(ensalada);
      }, 15000);
    return ensalada;
}

function getHamburguesa(){
    let hamburguesa = 'Estamos preparando la hamburguesa';
    setTimeout(() => {
        hamburguesa = 'HAMBURGUESA'
        console.log(hamburguesa);
      }, 5000);
    return hamburguesa;
}

function getBebida() {
   /* let bebida = 'Estamos preparando la bebida';
    setTimeout(() => {
      bebida = 'BEBIDA'
      console.log(bebida);
    }, 10000);
  
    return bebida;*/

    //Hacemos una promesa, para entender el concepto de la misma, en gral no las creamos sino que las manejamos.
    return new Promise(
        //tenemos 1 funcion anonima.
        //Tiene 2 parametros -> RESOLVE Y REJECT y en el cuerpo de la funcion tendremos q informar cuando suceden 
        //estas 2 cosas . 
        (resolve, reject) => {
            setTimeout(() => {
                bebida = 'BEBIDA'
                console.log(bebida);
                resolve (bebida)
              }, 2000);
        }
    );
  }

entregarComida()

/**Funcion setTimeOut
 * Recibe 1 funcion y 1 tiempo especifico
 * 
 * 
 */

//veo hasta el min 1:14 de la clase 3