import MovieModel from "../models/movieModel.js";

// GET ALL MOVIES
export const getAllMovies = async (req, res) => {
  try {
    const movies = await MovieModel.getAll();

    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// GET MOVIE BY OBJECT ID
export const getMovieById = async (req, res) => {
  try {
    const movie = await MovieModel.getById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE MOVIE
export const createMovie = async (req, res) => {
  try {
    const {
      title,
      genre,
      year,
      director,
      synopsis,
      rating,
      cast,
    } = req.body;

    const newMovie = await MovieModel.create({
      title,
      genre,
      year,
      director,
      synopsis,
      rating,
      cast,
    });

    return res.status(201).json({
      message: "Movie added successfully",
      movie: newMovie,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

// DELETE MOVIE BY OBJECT ID
export const deleteMovie = async (req, res) => {
  try {
    const movie = await MovieModel.removeById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    return res.status(200).json({
      message: "Movie deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};