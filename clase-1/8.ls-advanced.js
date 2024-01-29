const fs = require('node:fs/promises');
const path = require('path');
const picocolors = require('picocolors');

const folder = process.argv[2] ?? '.';

async function ls () {
    let files
    try {
        files = await fs.readdir(folder)
    }
    catch{
        console.log(picocolors.red(`❌ No se pudo leer el directorio ${folder}`));
        process.exit(1);
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let stats
        try {
            stats = await fs.stat(filePath) // <-- info del archivo
        }
        catch(err) {
            console.log(err);
        }
        const isDirectory = stats.isDirectory()
        const fileType = isDirectory ? `dir` : 'file' 
        const filesSize = stats.size
        const fileModified = stats.mtime.toLocaleString()
        return `${fileType} ${picocolors.blue(file.padEnd(20))} ${picocolors.green(filesSize.toString().padEnd(20))} ${picocolors.yellow(fileModified)}`

    })
    const fileInfo = await Promise.all(filesPromises)
    fileInfo.forEach(fileInfo => {console.log(fileInfo);})
}
ls(folder)
