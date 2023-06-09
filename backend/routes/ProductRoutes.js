const express = require('express');
const { getProductCategory, PostProductCategory, PatchProductCategory, DeleteProductCategory } = require('../controllers/ProductController');
const ProductRouter = express.Router();


ProductRouter.get('/productCategory', getProductCategory)
ProductRouter.post('/productCategory', PostProductCategory)
ProductRouter.patch('/productCategory/:id', PatchProductCategory)
ProductRouter.delete('/productCategory/:id', DeleteProductCategory)

module.exports = ProductRouter