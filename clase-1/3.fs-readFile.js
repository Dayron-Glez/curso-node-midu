const fs = require("node:fs");

console.log("Leyendo el primer archivo...");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  try {
    console.log("Completada la lectura del primer arvhivo", text);
  } catch {
    console.error(err);
  }
});

console.log("-> Hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo");

fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  try {
    console.log("Completada la lectura del segundo archivo", text);
  } catch {
    console.log(err);
  }
});
