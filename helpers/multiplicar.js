const fs = require('fs');

const crearArchivo = async( base = 5, listar = false, limite = 10 ) => {

        let salida = `************Tabla del ${base} ************\n`.underline.red;
        let salidaForFile = `************Tabla del ${base} ************\n`;
    
        for ( let i = 1; i <= limite; i++) {
            salida += `${ base } * ${ i } = ${base*i}\n`.green;
            salidaForFile += `${ base } * ${ i } = ${base*i}\n`;
        }

        if( listar ){
            console.log( salida );
        }
        
        //si no se define path toma como defautl la carpeta base
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salidaForFile );

        /*fs.writeFile( `tabla-${base}.txt`, salida, ( err ) => {
            if (err) throw err;
            console.log( `tabla-${base}.txt creado` );
        } );*/

        return  `tabla-${base}.txt`;

}

module.exports = {
    crearArchivo,

}