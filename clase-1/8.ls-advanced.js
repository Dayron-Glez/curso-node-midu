const fs = require('node:fs/promises')
const path = require('node:path')
const picocolors = require('picocolors')
const folder = process.argv[2] ?? '.'

async function ls(folder) {
    let files

    try {
        files = await fs.readdir(folder)
    } catch {
        console.log(`No se pudo leer el directorio ${folder}`);
        process.exit(1);
    }

    const filesPromises = files.map(async file => {
        const filePath = path.join(folder, file);
        let stats;

        try {
            stats = await fs.stat(filePath);
        } catch {
            console.error(`No se pudo leer el archivo: ${filePath}`);
        }

        const isDirectory = stats.isDirectory();
        const fileType = isDirectory ? 'd' : 'f';
        const fileSize = stats.size;
        const fileModified = stats.mtime.toLocaleString();

        return `${fileType} ${file.padEnd(40)} ${fileSize} ${fileModified.padStart(20)}`
    })
    const filesInfo = await Promise.all(filesPromises);
    filesInfo.forEach(fileInfo => console.log(fileInfo));
}

ls(folder)