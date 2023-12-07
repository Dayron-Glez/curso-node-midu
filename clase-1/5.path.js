const path = require('node:path');

//barra sepradora de carpetas según SO
console.log('Barra separadora de mi SO:',path.sep);

//unir rutas con path.join

const filePath = path.join('content','subfolder', 'text.txt');

console.log('El path sería:',filePath);

// El basename te da el nombre del fichero 
const base = path.basename('tmp/midu-secret-files/password.txt');
console.log('El nombre del fichero es:',base);

const fileName = path.basename('tmp/midu-secret-files/password.txt', '.txt');
console.log('EL nombre del fichero sin la extesión es:',fileName);

const extensión = path.basename('image.jpg');
console.log('La extensón del fichero es:',extensión);

