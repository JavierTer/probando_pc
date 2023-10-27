/*Ejercicio de promesas: 
EMOJIS: https://emojipedia.org/

3.1) Generar una app donde podamos poner a correr a 3 competidores (darles un nombre) y calcular como queda el podio de competidores.
La accion de correr de cada uno tendra q tardar un tiempo aleatorio entre 3 y 10 seg.
Como no podemos saber cuanto tardará cada uno, tendremos q hacer uso de Promesas y manejarlas para informar el podio.
Modificar la app para una maraton de 20 personas.

En el caso de empate se devuelve cualquiera de los 2 (orden indistinto)
* Investigar cmo generar un número random en Js. 



*/



const competidores = ["Juan", "Pedro", "Carlos"]


const generarTiempo = ()=> {
    return new Promise(
    (resolve) => 
    {
        let tiempo = Math.floor((Math.random() * 10) + 3)
        
        setTimeout( () => {
            resolve(tiempo)
        }, tiempo*1000 )
    }
)}

const generarCompetidores = (competidores) => {
    //let cantidad = competidores.length;
    const competidoresCopia  = [...competidores].map(competidor => 
        competidor = {
            nombre : competidor,
            tiempo : generarTiempo(),
        }
    )
    //console.log(competidoresCopia);

    return competidoresCopia
}

async function final(competidores) {

    let compe = generarCompetidores(competidores)
    
    //const [c1, c2, c3] = await Promise.all([compe.tiempo[0], compe.tiempo[1], compe.tiempo[2]])

    let resultado = await Promise.all([compe[0].tiempo, compe[1].tiempo, compe[2].tiempo])
    console.log(resultado);
 
/*4
    console.log(compe.sort( 
        (a,b) => b.tiempo - a.tiempo
    ));*/
}

final(competidores)


//generarCompetidores(competidores)