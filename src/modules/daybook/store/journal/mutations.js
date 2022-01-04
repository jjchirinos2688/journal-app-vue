// A TRAVÉS DE LAS MUTACIONES HACEMOS CAMBIOS EN EL ESTADO DE LA APLICACIÓN
// SON TOTALMENTE SINCRONAS. RECIBEN COMO PARÁMETRO EL ESTADO DE LA APLICACIÓN

export const setEntries = ( /* state */) => {

    console.log('Mutando la data');

}

export const updateEntry = (/* state */) => {

    console.log('Actualizando una entrada desde las mutaciones');
}

export const addEntry = (/* state */) => {

    console.log('Agregando una entrada desde las mutaciones');
}