const http = require('node:http');
const fs = require('node:fs');
const desirePort = process.env.PORT ?? 1234

const processRequest = (req,res) => {
   res.setHeader('Content-Type','text/html; charset=utf-8')

   if(req.url === '/'){
    res.statusCode = 200
    res.end('<h1>Bienvenido a mi página de inicio</h1>')
   }else if(req.url === '/contacto'){
    res.statusCode = 200
    res.end('<h1>Página de contacto</h1>')
   }else if(req.url === '/imagen-bonita'){

    fs.readFile('./funcionamiento-petición.png',(err, data) => {
        if(err) {
            res.statusCode = 500
            res.end('<h1>500 Interval Server Error</h1>')
        } else {
            
            res.setHeader('Content-Type','image/png')
            res.end(data)
        }
    })

   }
    else {
    res.statusCode = 404
    res.end('Eror 404 not found')
   }
}

const server = http.createServer(processRequest);

server.listen(desirePort, () => {
    console.log(`Server listening on port http://localhost:${desirePort}`);
})