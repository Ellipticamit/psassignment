const { Router } = require("express");
const getAllBanner = require("./banner.controller");

const router = Router();
router.get("/", getAllBanner);

module.exports = router;