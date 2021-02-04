const { option } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Es la base de la tabla de multiplicar'
    })
    option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: true,
        describe: 'Lista la tabla de muiltiplicar'
    })
    option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        demandOption: true,
        describe: 'Indica el numero hasta donde se multiplicara'
    })
    .check( (argv, options ) => {
        if (isNaN( argv.b )) {
            throw 'La base tiene que ser un numero'
        }
        return true;
    })    
    .argv;


module.exports = argv;