// app.js
import express from 'express';
import userRoutes from './routes/userRoutes.js';
import { checkConnection } from './config/db.js';
import createAllTable from './utils/dbUtils.js';
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'

const ap = express();
ap.use(cors());


ap.use(express.json()); // Middleware to parse JSON bodies
ap.use('/api/users', userRoutes); // Use user routes for API calls
ap.use('/api/auth', authRoutes); // Use user routes for API calls

ap.listen(3000, async() => {
  console.log('Server running on port 3000');
  try {
    await checkConnection();
    await createAllTable();
  } catch (error) {
    console.log("Failed to initialize the database",error);
    
  }
});
