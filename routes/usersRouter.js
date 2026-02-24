const express = require("express");
const usersRouter = express.Router();
const userModel = require("../models/users_model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const secret = "mysecretkey"

usersRouter.get("/" , (req , res) => {
    res.send("Hey");
});


usersRouter.post("/register" , async function(req , res){

    try{
        let {fullname , email , password } = req.body;
        let existinguser = await userModel.findOne({ email });

        if (existinguser)
            return res.status(400).send("User already exists");

        let salt = await bcrypt.genSalt(10);

        let hash = await bcrypt.hash(password , salt);

        let new_user = await userModel.create({
            fullname,
            email,
            password:hash
        });

        res.status(201).send(new_user);
    }  catch (err) {
        res.status(502).send(err);
    }

});


module.exports = usersRouter;