const categories = require("./categories.model");

const getAllCategories = (req, res) => {
    try {
        return res.status(200).json({ categories });
    } catch (e) {
        return res.status(400).json({ message: 'Error occured while fetching products' });
    }
}

module.exports = getAllCategories;