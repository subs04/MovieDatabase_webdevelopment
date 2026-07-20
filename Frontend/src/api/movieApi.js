import axios from 'axios'


const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
})

export function getAllMovies() {
  return api.get('/movies')
}

export function getMovieById(id) {
  return api.get(`/movies/${id}`)
}

export function createMovie(movieData) {
  return api.post('/movies', movieData)
}

export function deleteMovie(id) {
  return api.delete(`/movies/${id}`)
}

