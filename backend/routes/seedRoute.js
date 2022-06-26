// import express from 'express';
// import Product from '../models/productModel.js';
// import data from '../data.js';
const express = require('express');
const Product = require('../models/productModel.js');
const User = require('../models/userModel.js');
const data = require('../data');

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});s
  const createdProducts = await Product.insertMany(data.products);
  await User.remove({});
  const createdUser = await User.insertMany(data.users);
  res.send({ createdProducts, createdUser });
});
// export default seedRouter;
module.exports = seedRouter;
