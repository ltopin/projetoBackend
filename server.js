const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB Config

const db = require("./config/keys").mongoURI;

//connect to mongo

mongoose
  .connect(db)
  .then(() => console.log("mongodb CONECTADO !!"))
  .catch(err => console.log(err));

//use routes

app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Servidor iniciado na porta ${port}`));
