// import express from 'express';
// import data from './data.js';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import seedRouter from './routes/seedRoutes.js';
// import productRouter from './routes/productRoutes.js';

const express = require('express');
const Product = require('./models/productModel');
const data = require('./data');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const seedRouter = require('./routes/seedRoute');
const productRouter = require('./routes/productRoutes');

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
