let miArray = [1,5,7,3,4,4,3];

/*MAP
    El map devuelve otro array pero va mutando, dejamos la expresion booleana de lado, el map itera x cada elmeneto
    lo modifica y devuelve 1 array ya modificado., si tuvieramos 1 array de string podriamos concatenarle algo
*/

const result = miArray.map(element => `${element}${element}`)

console.log(result);

console.log(miArray);

//Como CLONAR
//SPREED ...
//el SPREED agarra 1 objeto y separa todo lo que tiene dentro. se suele usarlo para desarmar.

console.log(...miArray);

/*Para clonarlo, hay que guardarlo en un nuevo array*/ 
const copia = [...miArray.map(e => `${e}${e}`)]

console.log('esta es la COPIA: ' + copia);

console.log(miArray);

//tambien podemos agregarle elmenetos pero solo a la copia
const copia2 = [...miArray, 5,100,1]

console.log(copia2);

// tambien anidar distintos arrays

const copia3 = [...copia2, ...copia]

console.log(`esta es la copia anidada:   ${copia3}`);

//VEO HASTA 2:02
