const os = require('node:os');

console.log('Información del Sistema Operativo');
console.log('Nombre del sistema operativo', os.platform());
console.log('Versión', os.release());
console.log('Aruitectura', os.arch());
console.log('CPUs', os.cpus().length);
console.log('Memoria libre', os.freemem() /1024 /1024);
console.log('Memoria total', os.totalmem() /1024 /1204);
// Mini programa que da la información del SO