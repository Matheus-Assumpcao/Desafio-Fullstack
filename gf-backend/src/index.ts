import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';

import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';

dotenv.config();
const app = express();

app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'], allowedHeaders: ['Content-Type', 'Authorization'] }));
app.use(express.json());

app.use('/api/usuarios', userRoutes);
app.use('/api/produtos', productRoutes);

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
