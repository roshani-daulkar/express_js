const express = require("express");
const ownersRouter = express.Router();
const ownerModel = require("../models/owners_models");

ownersRouter.get("/" , (req , res) => {
    res.send("Hey its working");
});

ownersRouter.post("/create" , async function (req , res) {
    let owner = await ownerModel.find();
    if (owner.length > 0) return res.status(503).send("You are not authorized to create new owner");
    
    let {fullname ,email , password } = req.body;
    
    let created_user = await ownerModel.create({
        fullname,
        email,
        password
           })
    res.status(201).send(created_user)
})

module.exports = ownersRouter;
