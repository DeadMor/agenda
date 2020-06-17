const argv = require('./config/yargs').argv;
const color = require('colors');
const porHacer = require("./por-hacer/por-hacer");

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log("Crear por hacer");
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':

        console.log("listar todas las tareas");

        let tareas = porHacer.getListado();
        for (let index = 0; index < tareas.length; index++) {
            console.log("=================POR HACER===================".green);
            console.log(tareas[index].descripcion);
            console.log("estado", tareas[index].completado);
            console.log("=============================================".green);


        }
        break;

    case 'actualizar':
        console.log("actualizar tarea");
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log("borrar tarea");
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(argv.descripcion)
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
        break;

}