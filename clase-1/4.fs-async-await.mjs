import { readFile } from 'node:fs/promises';


console.log('Leyendo el primer archivo');
 const text = await readFile('./archivo.txt', 'utf-8')
    
        console.log('Primer texto:',text);
   

 console.log('Hacer cosas mientras');

console.log('Leyendo el segundo archivo');
 const secondText = await readFile('./archivo2.txt', 'utf-8')
    
        console.log('segundo texto:', secondText);
   
 
    //Ahora resuelto pero con async await
