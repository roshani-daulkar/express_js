const express = require("express");
const ownersRouter = express.Router();
module.exports = ownersRouter;
ownersRouter.get("/" , (req , res) => {
    res.send("Hey");
});

