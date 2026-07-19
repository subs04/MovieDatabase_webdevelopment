import Movie from "../../data/movie.js";

// Get all movies
async function getAll(filter = {}) {
  return await Movie.find(filter);
}

// Get one movie by MongoDB ObjectId
async function getById(id) {
  return await Movie.findById(id);
}

// Create a new movie
async function create(data) {
  const newMovie = new Movie({
    title: data.title,
    genre: data.genre,
    year: data.year,
    director: data.director,
    synopsis: data.synopsis,
    rating: data.rating,
    cast: data.cast,
  });

  return await newMovie.save();
}

// Delete movie by ObjectId
async function removeById(id) {
  return await Movie.findByIdAndDelete(id);
}

export default {
  getAll,
  getById,
  create,
  removeById,
};