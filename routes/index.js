const router = require('express').Router()

const ProductCont = require('../controller/productCont')

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/products', ProductCont.show)

router.get('/products/add', ProductCont.addForm)

router.post('/products/add', ProductCont.add)

router.get('/products/category/:category_id', ProductCont.categories)

router.get('/products/:product_id/discontinued', ProductCont.discontinuedId)

router.get('/products/discontinued', ProductCont.discontinued)

router.get('/products/discontinued/:product_id/remove', ProductCont.removeProduct)

module.exports = router
