const express = require('express');

const app = express();

app.disable('x-powered-by')

const PORT = process.env.PORT ?? 1234;

app.get('/', (req, res) => {
    res.json({message: 'Hola mundo'})
})

app.listen(PORT, () => {
    console.log(`Server listengin on port http://localhost:${PORT}`);
})