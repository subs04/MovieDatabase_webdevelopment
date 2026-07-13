import MovieModel from '../models/movieModel.js';

export const getAllMovies = (req, res) => {
  const movies = MovieModel.getAll();
  return res.status(200).json(movies);
};

export const getMovieById = (req, res) => {
  const id = Number(req.params.id);
  const movie = MovieModel.getById(id);
  if (!movie) return res.status(404).json({ message: 'Movie not found' });
  return res.status(200).json(movie);
};

export const createMovie = (req, res) => {
  const { title, genre, year, director, synopsis, rating, cast, image } = req.body;
  const newMovie = MovieModel.create({ title, genre, year, director, synopsis, rating, cast, image });
  return res.status(201).json({ message: 'Movie added successfully', movie: newMovie });
};

export const deleteMovie = (req, res) => {
  const id = Number(req.params.id);
  const ok = MovieModel.removeById(id);
  if (!ok) return res.status(404).json({ message: 'Movie not found' });
  return res.status(204).send();
};
