import { readFile } from "node:fs/promises";

    Promise.all
    ([
        readFile("./archivo.txt", "utf-8"),
        readFile("./archivo2.txt", "utf-8")
    ]).then(([text, secondText]) => {
        console.log(text); // Imprime el contenido del archivo archivo.txt
        console.log(secondText); //Imprime el contenido del archivo archivo2.txt
    })

    

     
    
