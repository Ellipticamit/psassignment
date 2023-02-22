const { Router } = require("express");
const getAllProducts = require("./products.controller");

const router = Router();
router.get("/", getAllProducts);

module.exports = router;