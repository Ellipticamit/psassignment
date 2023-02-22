const { Router } = require("express");
const getAllCategories  = require("./categories.controller");

const router = Router();
router.get("/", getAllCategories);

module.exports = router;