import { body, validationResult } from 'express-validator';

const movieRules = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('genre').trim().notEmpty().withMessage('Genre is required'),
  body('year').isInt({ min: 1800 }).withMessage('Year must be a valid integer'),
  body('director').trim().notEmpty().withMessage('Director is required'),
  body('synopsis').trim().notEmpty().withMessage('Synopsis is required'),
  body('rating').notEmpty().withMessage('Rating is required').isNumeric().withMessage('Rating must be a number between 0 and 10'),
  body('cast').notEmpty().withMessage('Cast is required').isArray({ min: 1 }).withMessage('Cast must be an array with at least one member'),
  body('image').optional().isString().withMessage('Image must be a string'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  return res.status(400).json({ errors: errors.array() });
};

export { movieRules, validate };
