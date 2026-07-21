import Movie from "../../data/movie.js";

// Get all movies
async function getAll(filter = {}) {
  const movies = await Movie.find(filter);
  return movies.map(movie => ({
    ...movie.toObject(),
    id: movie._id,
    image: movie.image || `https://picsum.photos/seed/${(movie.title || "movie").toLowerCase().replace(/[^a-z0-9]+/g, "-")}/250/350`
  }));
}

// Get one movie by MongoDB ObjectId
async function getById(id) {
  const movie = await Movie.findById(id);
  if (!movie) return null;
  return {
    ...movie.toObject(),
    id: movie._id,
    image: movie.image || `https://picsum.photos/seed/${(movie.title || "movie").toLowerCase().replace(/[^a-z0-9]+/g, "-")}/250/350`
  };
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
    image: data.image || null
  });

  const savedMovie = await newMovie.save();
  return {
    ...savedMovie.toObject(),
    id: savedMovie._id,
    image: savedMovie.image || `https://picsum.photos/seed/${(savedMovie.title || "movie").toLowerCase().replace(/[^a-z0-9]+/g, "-")}/250/350`
  };
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