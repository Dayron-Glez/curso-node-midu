const fs = require("node:fs/promises");

//!Esta primera forma no funciona en CommonJs pq el await debe ser envuelto dentro de una función 
//! asíncrona
// console.log("Leyendo el primer archivo...");
// const text = await fs.readFile("./archivo.txt", "utf-8")
// console.log(text);

// console.log("-> Hacer cosas mientras lee el archivo...");

// console.log("Leyendo el segundo archivo");

// const secondText = await fs.readFile("./archivo2.txt", "utf-8")
// console.log(secondText);


//* Existen 2 formas de resolver esto, la primera es envolver el await en una función autoinvocada
//* o IIFE

(
    async () =>
    {
        console.log("Leyendo el primer archivo...");

        const text = await fs.readFile("./archivo.txt", "utf-8")
        console.log(text);
        
        console.log("-> Hacer cosas mientras lee el archivo...");
        
        console.log("Leyendo el segundo archivo");
        
        const secondText = await fs.readFile("./archivo2.txt", "utf-8")
        console.log(secondText);
    }
)()


