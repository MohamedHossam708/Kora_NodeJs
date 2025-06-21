import express from 'express';
import dotenv from 'dotenv';
import  mongoConnection  from './DataBase/dbConnetion.js';
import UserRouter from './Src/Modules/User/UserRoutes.js'


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', UserRouter);

// 404 handler
app.all('*', (req, res, next) => {
  res.status(404).json({ success: false, message: `Can't find ${req.originalUrl}` });
});

// global error handler
app.use((err, req, res, next) => {
  res.status(500).json({ success: false, message: err.message });
});

mongoConnection()
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
