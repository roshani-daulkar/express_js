const express = require("express");
const usersRouter = express.Router();
const userModel = require("../models/users_model");

usersRouter.get("/" , (req , res) => {
    res.send("Hey");
});

module.exports = usersRouter;