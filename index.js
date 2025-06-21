import express from 'express';
import dotenv from 'dotenv';
import UserRouter from './Src/Modules/User/UserRoutes.js';
import {mongoConnection} from './DataBase/dbConnetion.js'

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

mongoConnection()

app.use('/api/user', UserRouter);


// Error handling middleware
 app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message,
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
});



app.listen(port, () => console.log(`✅ Server running on port ${port}`));
