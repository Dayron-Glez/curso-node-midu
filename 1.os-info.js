const os = require('node:os');
console.log('--------------------------------');
console.log('Información del SO');
console.log('Nombre del sistema operativo: ', os.platform());
console.log('Versión del sistema operativo: ',os.release());
console.log('Arquitectura delsistema operativo: ', os.arch());
console.log('CPUS', os.cpus());
console.log('Memoria libre: ', os.freemem()/1024/1024);
console.log('Memoria total :',os.totalmem()/1024/1024);