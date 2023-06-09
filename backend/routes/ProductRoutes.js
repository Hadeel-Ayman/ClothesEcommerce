const express = require('express');
const { getProductCategory, PostProductCategory, PatchProductCategory, DeleteProductCategory } = require('../controllers/ProductController');
const ProductRouter = express.Router();
const path = require('path')
const multer = require('multer');
const auth = require('../middleware/auth');


ProductRouter.use(express.static('public'))

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/productImages'), function (err, data) {
            if (err) {
                throw err
            }
        })
    },
    filename: function (req, file, cb) {
        let extintion = Date.now() + '-' + file.originalname
        cb(null, extintion + function (err, data) {
            if (err) {
                throw err
            }
        })
    }
})

const upload = multer({ storage: storage })



ProductRouter.post('/productCategory', upload.array('images'), auth, PostProductCategory)
ProductRouter.get('/productCategory', auth, getProductCategory)
ProductRouter.patch('/productCategory/:id', auth, PatchProductCategory)
ProductRouter.delete('/productCategory/:id', auth, DeleteProductCategory)

module.exports = ProductRouter