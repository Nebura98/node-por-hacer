const descripcion = {
        demand : true,
        alias : 'd',
        desc : 'Descripción de la tarea.'
};
const completado = {
    default : true,
    alias : 'c',
    desc : 'Marca completado la tarea.'
    
}

const argv  = require('yargs')
            .command('crear','Crea una nueva tarea',{
                 descripcion
            })
            .command('actualizar','Actuliza una tarea',{
                 descripcion,
                completado 
            })
            .command('borrar','Borra una tarea por hacer',{
                descripcion
            })
            .help()
            .argv;

module.exports = {
    argv
}