const fs = require('node:fs');

fs.readdir('.',(err, files) => {
    if(err) {
        console.log('Error al leer el directorio:', err);
        return;
    }
    files.map(file => console.log(file));
})