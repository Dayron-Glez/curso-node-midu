const fs = require('node:fs');

fs.readdir('.', (err, files) =>{
    if (err) {
        console.log('Ha ocurrido un error al intentar leer el directorio:', err);
        return;
    }

    files.map(file => {
        console.log(file);
    })
})