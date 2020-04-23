const { Category, Product } = require('../models');
const getRupiah = require('../helpers/getRupiah')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

class ProductCont {

    static show(req, res) {
        Product.findAll({
            include: [Category],
            where: { is_discontinued: 'false' }
        })
            .then((data) => {
                // res.send(data)
                res.render('products', { data, getRupiah })
            }).catch((err) => {
                res.send(err)
            });
    }

    static addForm(req, res) {
        Category.findAll()
            .then((data) => {
                res.render('addProduct', { categories: data })
            }).catch((err) => {
                res.send(err)
            });
    }

    static add(req, res) {
        let addData = {
            name: req.body.name,
            quantity: req.body.quantity,
            price: req.body.price,
            CategoryId: req.body.CategoryId
        }
        Product.create(addData)
            .then((data) => {
                res.redirect('/products')
            }).catch((err) => {
                let error = []
                err.errors.forEach(el => {
                    error.push(el.message)
                });
                res.send(error)
            });
    }

    static categories(req, res) {
        Product.findAll({
            include: [Category],
            where: {
                [Op.and]: {
                    is_discontinued: 'false',
                    CategoryId: req.params.category_id
                }
            }
        })
            .then((data) => {
                // res.send(data)
                res.render('products_category', { data, getRupiah })
            }).catch((err) => {
                res.send(err)
            });

    }

    static discontinuedId(req, res) {
        Product.findByPk(req.params.product_id)
            .then((data) => {
                let newData = {
                    name: data.name,
                    quantity: data.quantity,
                    price: data.price,
                    CategoryId: data.CategoryId,
                    is_discontinued: true
                }
                // res.send(newData)
                return Product.update(newData, {
                    where: {
                        id: req.params.product_id
                    }
                })
            })
            .then((data) => {
                res.redirect('/products')
            }).catch((err) => {
                res.send(err)
            });
    }

    static discontinued(req, res) {
        Product.findAll({
            include: [Category],
            where: { is_discontinued: 'true' }
        })
            .then((data) => {
                res.render('products_continued_true', { data, getRupiah })
            }).catch((err) => {
                res.send(err)
            });
    }

    static removeProduct(req, res) {
        Product.destroy({
            where: {
                id: req.params.product_id
            }
        })
            .then((data) => {
                res.redirect('/products/discontinued')
            }).catch((err) => {
                res.send(err)
            });
    }

}

module.exports = ProductCont;
