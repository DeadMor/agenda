const opcionesC = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}
const opcionesA = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        alias: 'c',
        default: true
    }
}
const opcionesB = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}
const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', opcionesC)
    .command('actualizar', 'actualiza el estado completado de una tarea', opcionesA)
    .command('borrar', 'borrar una tarea', opcionesB)
    .help()
    .argv;

module.exports = {
    argv
}