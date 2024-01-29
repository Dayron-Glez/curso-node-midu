const http = require('node:http');
const port = 5600
const server = http.createServer((req, res) => {
    console.log("request received");
    res.end('hello')
})

server.listen(port, () => {
console.log(`escuchando en el puerto http://localhost:${port}`);
})