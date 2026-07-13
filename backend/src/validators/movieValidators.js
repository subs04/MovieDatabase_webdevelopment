import { body, validationResult } from 'express-validator';

const movieRules = [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('genre').trim().notEmpty().withMessage('Genre is required'),
  body('year').isInt({ min: 1800 }).withMessage('Year must be a valid integer'),
  body('director').trim().notEmpty().withMessage('Director is required'),
  body('synopsis').trim().notEmpty().withMessage('Synopsis is required'),
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) return next();
  return res.status(400).json({ errors: errors.array() });
};

export { movieRules, validate };
