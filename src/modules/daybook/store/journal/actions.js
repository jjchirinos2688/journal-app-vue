// LAS ACCIONES TIENEN COMO ARGUMENTO EL CONTEXT Y EL CONTEXT A SU VEZ EL COMMIT
// POR TANTO SE PUEDE DESTRUCTURAR COMO ({commit}) en lugar de (context)

export const loadEntries = async (/*{commit}*/) => {

    console.log('Obteniendo la data de entradas');

}


export const updateEntry = async (/* {commit} */) => {
    
    console.log('Actualizando una entrada');
}

export const createEntry = async (/* {commit} */) => {

    console.log('Creando una nueva entrada');
}