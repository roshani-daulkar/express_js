const express = require("express");
const usersRouter = require("./routes/usersRouter");
const productsRouter = require("./routes/productsRouter");
const ownersRouter = require("./routes/ownersRouter");
const app = express();
const db = require("./config/mongoose-connection")
const cookieParser = require("cookie-parser");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname , "public")));
app.set("view engine" , "ejs");

app.use("/owners" ,ownersRouter);
app.use("/products" , productsRouter);
app.use("/users" , usersRouter);

app.listen(3000);