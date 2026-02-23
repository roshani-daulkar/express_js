const express = require("express");
const ownersRouter = express.Router();
const ownerModel = require("../models/owners_models");

ownersRouter.get("/" , (req , res) => {
    res.send("Hey its working");
});

ownersRouter.post("/create" , async function (req , res) {
    let owner = await ownerModel.find();
    if (owner.length > 0) return res.send(503).send("You are not authorized to create new owner");
    res.send("we can create owner")
    
})

module.exports = ownersRouter;
