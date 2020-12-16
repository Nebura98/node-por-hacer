const argv  = require("./config/yargs").argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer')

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);    
    break;

    case 'listar':
        let listado = porHacer.getListado();   
        for (const tarea of listado) {
            console.log(`
            ${'============Por hacer==============='.green}
            Descripción : ${tarea.descripcion}
            Compleatado : ${ tarea.completado}
            ${'===================================='.green}
            `);
        }
    break;

    case 'actualizar': 
        let actulizado = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(`${(actulizado)? 'La tarea ha sido actualizada' : 'La tarea no ha sido actulizada'}`);
    break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(`${(borrado) ? 'La tarea ha sido borrada' : 'La tarea NO ha sido borrada'}`);
    break;

    default:
        console.log('Comando no reconocido');
    break;

};

