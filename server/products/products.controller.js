const products = require("./products.model");

const getAllProducts = (req, res) => {
    try {
        return res.status(200).json({ products });
    } catch (e) {
        return res.status(400).json({ message: 'Error occured while fetching products' });
    }
}

module.exports = getAllProducts;