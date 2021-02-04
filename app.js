const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs');
const colors = require('colors');



console.clear();

crearArchivo( argv.argv.b , argv.argv.l, argv.argv.h)
    .then ( nombreArchivo => console.log( nombreArchivo.yellow, 'creado'.yellow))
    .catch ( err => console.log( err ) )

