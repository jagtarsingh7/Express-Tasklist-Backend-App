const express = require("express");
const { body, check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Create router
const router = express.Router();
//Schema 
var Task = require("./schema/task");
var User = require("./schema/users");

// Chained router route for Root Route
router.route("/").get(function (req, res) {
  res.send("<h1>welcome to my backend service</h1>")
});

//Login Route
router
  .route("/login")
  //validation and login
  .post(validation, login);

//Register Route
router
  .route("/register")
  //validation and register function
  .post(validation, register);

//Get all tasks data from db     
router
  .route("/task/all/")
  .get(getTask);

//Add a task                     
router
  .route("/task/add/")
  // create a Task
  .post(authenticateToken, addTask);

// Modify a task                              
router
  .put("/task/update/:id", authenticateToken, updateTask);

// delete a task by id                          
router
  .delete("/task/delete/:id", authenticateToken, deleteTask);

router.all("*", (req, res) => {
  res.status(404).send("Error 404: pagenot found");
});


// Export router
module.exports = router;
