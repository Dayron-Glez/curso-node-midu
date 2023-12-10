const express = require('express');
const movies = require('./movies.json');
const crypto = require('node:crypto');
const cors = require('cors')

const { Validation,partialValidation } = require('./schemas/movieValidation');
const app = express();
app.use(cors({
  origin: (origin, callback) => {
    const ACCEPTED_ORIGINS = [
      'http://localhost:8080',
      'http://localhost:1234',
      'https://movies.com',
      'https://midu.dev'
    ]

    if (ACCEPTED_ORIGINS.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}))

app.disable('x-powered-by')
app.use(express.json()) // Este middleware se utiliza en conjunto con el método post para que el req.body funcione


app.get('/', (req, res) => {
    res.json({message: 'Hola mundo'})
})

// Así tenemos una url que identifica un recurso en concreto(movie), url(/movies)
app.get('/movies', (req,res) => {
    const { genre } = req.query;
    if(genre){
        const filteredMovies = movies.filter(movie => movie.genre.some(g => g.toLocaleLowerCase() === genre.toLocaleLowerCase()))
        return res.json(filteredMovies)
    }
})

app.get('/movies/:id', (req, res) => {
    const {id} = req.params;
    const movie = movies.find(movie => movie.id === id);
    if(movie) return res.send(`<h1>El título de la peli es: ${movie.title}</h1>`);
    res.status(404).send(`404, movie not found`)
})

app.post('/movies', (req, res) => {

    const result = Validation(req.body)
    // Req.body funciona para el verbo http POST por el middleware de app.use(express.json())

    if(result.error) {
        return res.status(400).json({error: JSON.parse(result.error.message)})
    }

    const newMovie = {
        id: crypto.randomUUID(),
       ...result.data
    }

    // Esto no sería REST pq estamos guardando el estado de la aplicación en memoria
    movies.push(newMovie)
    res.status(201).json(newMovie)
})

app.patch('/movies/:id', (req, res) => {
    
    const result = partialValidation(req.body)
    
    if(result.error) {
        res.status(400).json({error: JSON.parse(result.error.message)})
    }
    
    const {id} = req.params;
    const movieIndex = movies.findIndex(movie => movie.id === id);
    if(movieIndex === -1) 
    {
        return res.status(404).json({message: 'Not Found'})
    }

    const uptadedMovie = {
        ...movies[movieIndex],
        ...result.data
    }
    movies[movieIndex] = uptadedMovie
    return res.json(uptadedMovie)
})


const PORT = process.env.PORT ?? 1234;
app.listen(PORT, () => {
    console.log(`Server listengin on port http://localhost:${PORT}`);
})