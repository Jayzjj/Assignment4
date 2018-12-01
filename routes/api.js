// Dependencies
var express = require('express');
var router = express.Router();
// Models
var Product = require('../models/product');
// Routes
router.route('/products').post(function (req, res) {
    var p = new Product();
    p.id = req.body.id;
    p.name = req.body.name;
    p.isPrime = req.body.isPrime;
    p.price = req.body.price;
    p.sells_amount = req.body.sells_amount
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        res.send({ message: 'Product Created !' })
    })
});

router.route('/products/:product_id').get(function (req, res) {
    
    Product.find({id: req.params.product_id}, function (err, prod) {
        if (err)
            res.send(err);
        res.json(prod);
    });
});

router.route('/products/:product_id').put(function (req, res) {
	
    Product.findOne({id: req.params.product_id}, function (err, prod) {
        if (err) {
            res.send(err);
        }
        prod.id = req.body.id;
        prod.name = req.body.name;
        prod.isPrime = req.body.isPrime;
        prod.price = req.body.price;
        prod.sells_amount = req.body.sells_amount;
        prod.save(function (err) {
            if (err)
                res.send(err);
            res.json({ message: 'Product updated!' });
        });
    });
});

router.route('/products/:product_id').delete(function (req, res) {

    Product.findOne({id: req.params.product_id}, function (err, prod) {
        if (err) {
            res.send(err);
        }
        prod.remove(function (err){
 			if (err)
                res.send(err);
        res.json({ message: 'Successfully deleted' });
       	});
	});
});

// Return router
module.exports = router;