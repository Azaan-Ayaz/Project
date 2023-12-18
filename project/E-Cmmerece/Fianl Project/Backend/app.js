// app.js
const express = require("express");
const app = express();
const DataBase = require("./DataBase/DB");
const morgan = require("morgan");
const authRoute = require("./routes/authRoute"); 

DataBase();

app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/", authRoute); // Use authRoute here

app.all("/", (req, res) => {
  res.send("<h1>Welcome to e-Commerce App</h1>");
});

module.exports = app;
