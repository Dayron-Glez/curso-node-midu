const express = require('express');
const ditto = require('./pokemon/ditto.json')

const app = express();

const PORT = process.env.PORT ?? 1234

app.disabled('x-powered-by')

app.use(express.json())

app.get('/pokemon/ditto', (req, res) =>{
    res.json(ditto)
})

app.post('/pokemon', (req, res) =>{
    res.status(201).json(req.body)
    // let body = ''
    // req.on('data', chunk => {
    //     body += chunk.toString()
    // })
    // req.on('end', () =>{
    //     const data = JSON.parse(body)
    //     res.status(201).json(data)
    // })
})

app.use((req, res) => {
    res.status(404).send('404 not found')
})

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
})