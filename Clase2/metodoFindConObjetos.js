const personas = [
    {
        nombre: 'Juan'

    },
    {
        nombre: 'Pedro'
    },
    {
        nombre: 'Javi'
    }
]

const result= personas.find(persona => {return persona.nombre == "Pedro"});

console.log('La personas es : ' + result.nombre);

console.log(result);

console.log(personas);
