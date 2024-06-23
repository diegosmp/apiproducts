const ProductController = require('../controllers/ProductController')

const router = require('express').Router()

router.post('/create', ProductController.create)
router.get('/', ProductController.products)

module.exports = router