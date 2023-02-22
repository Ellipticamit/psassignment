const express = require("express");
const cors = require("cors");
const config = require("./config");
const productRouter = require("./products/products.router");
const bannerRouter = require("./banner/banner.router");
const categoriesRouter = require("./categories/categories.router");

const app = express();

app.use(cors({
    origin: '*'
}));

app.use("/api/v1/banner", bannerRouter);
app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/products", productRouter);

app.get("/api/v1/", (req, res) => {
    return res.status(200).json({ message: 'Welcome to sasta bazar REST API'});
});

app.listen(config.port, () => { console.log(`REST Api is listening on port ${config.port}`)});