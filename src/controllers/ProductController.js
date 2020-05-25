const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    //Find all products
    async index(req, res) {
        const products = await Product.find();

        return res.json(products);
    },
    //create product
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    }
};