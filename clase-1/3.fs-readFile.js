const fs = require('node:fs');


console.log('Leyendo el primer archivo');
 fs.readFile('./archivo.txt', 'utf-8',(err,text) => {

     console.log('---> Primer texto: ',text);
 })

 console.log('Hacer cosas mientra');

console.log('Leyendo el segundo archivo');
 fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {

     console.log('---> Segundo texto:',text);
 })

 //Los Caalbacks son funciones q se ejecutan cuando se completa una tarea asíncrona