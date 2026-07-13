import dotenv from 'dotenv';
dotenv.config();

import app from './src/app.js';
import dbConnection from './src/config/db.js';

const PORT = process.env.PORT || 3000;
const start = async () => {
  try {
    await dbConnection();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  }
};

start();
