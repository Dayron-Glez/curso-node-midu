import { readFile } from "node:fs/promises";

//!Esta primera forma no funciona en CommonJs pq el await debe ser envuelto dentro de una función 
//! asíncrona
// console.log("Leyendo el primer archivo...");
// const text = await fs.readFile("./archivo.txt", "utf-8")
// console.log(text);

// console.log("-> Hacer cosas mientras lee el archivo...");

// console.log("Leyendo el segundo archivo");

// const secondText = await fs.readFile("./archivo2.txt", "utf-8")
// console.log(secondText);


//* Esta es la segunda forma: transformar el archivo a ES module
    
    console.log("Leyendo el primer archivo...");

    const text = await readFile("./archivo.txt", "utf-8")
    console.log(text);
    
    console.log("-> Hacer cosas mientras lee el archivo...");
    
    console.log("Leyendo el segundo archivo");
    
    const secondText = await readFile("./archivo2.txt", "utf-8")
    console.log(secondText);

