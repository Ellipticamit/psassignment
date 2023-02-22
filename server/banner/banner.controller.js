const banner = require("./banner.model");
const getAllBanner = (req, res) => {
    try {
        return res.status(200).json({ banner });
    } catch (e) {
        return res.status(400).json({ message: 'Error occured while fetching banner data' });
    }
}

module.exports = getAllBanner;