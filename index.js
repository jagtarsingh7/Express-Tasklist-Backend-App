// Import express, routes, env, mongoose
const express = require("express");
const routes = require("./routes");
require('dotenv').config()
var mongoose = require("mongoose");

//intial setup
var app = express();
var database = require("./database_config/database_tasklist");
var bodyParser = require("body-parser"); // pull information from HTML POST (express4)
var port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: "true" })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: "application/vnd.api+json" })); // parse application/vnd.api+json as json

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(database.url);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

app.use("/", routes);

//Connect to the database before listening

connectDB().then(() => {
  app.listen(port, () => {
      console.log("listening for requests");
  })
})
