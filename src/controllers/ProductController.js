const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //Find all products
    async index(req, res) {
        const products = await Product.find();

        return res.json(products);
    },
    //find product
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },
    //create product
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },
    //update product
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true});

        return res.json(product);
    },

};