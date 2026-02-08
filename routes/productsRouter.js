const express = require("express");
const productsRouter = express.Router();
const productsModel = require("../models/products_model");

productsRouter.get("/" , (req , res) => {
    res.send("Hey");
});

module.exports = productsRouter;