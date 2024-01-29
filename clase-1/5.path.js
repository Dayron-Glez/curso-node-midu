const path = require('node:path');

console.log(path.sep); // <-- Se utiliza para saber los separadores según el SO


//! Es una mala práctica crear rutas; porque a fin de cuentas los separadores cambian según el SO
//* En lugar de eso se unen con el path.join
const pathJoin = path.join('content','subfolder','text')
console.log(pathJoin);

const base = path.basename('/temp/dayron-secret-files/password.txt')// <-- Se utiliza para obtener el nombre del archivo y extensión
console.log('Nombre del archivo y extensión:',base);

const fileName = path.basename('/temp/dayron-secret-files/password.txt', '.txt')// <-- Se utiliza para obtener el nombre del archivo
console.log('Nombre del archivo :',fileName);

const extension = path.extname('password.txt') // <-- Se utiliza para obtener la extensión
console.log('Extensión:',extension);