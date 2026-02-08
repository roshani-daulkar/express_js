const express = require("express");
const ownersRouter = express.Router();
const ownerModel = require("../models/owners_models");

ownersRouter.get("/" , (req , res) => {
    res.send("Hey");
});

module.exports = ownersRouter;
