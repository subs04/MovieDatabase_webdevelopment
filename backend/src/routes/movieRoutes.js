import express from 'express';
import * as MovieController from '../controllers/movieController.js';
import { movieRules, validate } from '../validators/movieValidators.js';

const router = express.Router();

router.get('/', MovieController.getAllMovies);
router.get('/:id', MovieController.getMovieById);
router.post('/', movieRules, validate, MovieController.createMovie);
router.delete('/:id', MovieController.deleteMovie);

export default router;
