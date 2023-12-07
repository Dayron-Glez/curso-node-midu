import { readFile } from 'node:fs/promises';

console.time('paralelismo')
Promise.all([
       readFile('./archivo.txt', 'utf-8'),
       readFile('./archivo2.txt', 'utf-8'),
]).then(([text, secondText]) => {
       console.log('Primer texto:',text);
       console.log('Segundo texto:',secondText);
})
console.timeEnd('paralelismo');
   
 
    //Ahora resuelto pero con async await en paralelo
