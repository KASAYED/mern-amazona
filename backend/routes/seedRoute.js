// import express from 'express';
// import Product from '../models/productModel.js';
// import data from '../data.js';
const express = require('express');
const Product = require('../models/productModel.js');
const data = require('../data');

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
});
// export default seedRouter;
module.exports = seedRouter;
