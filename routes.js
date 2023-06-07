//import express
const express = require("express");
// Create router
const router = express.Router();
//import routes
const validation = require("./routes/validation");
const login = require("./routes/login");
const register = require("./routes/register");
const getTask = require("./routes/getTask");
const addTask = require("./routes/addTask");
const updateTask = require("./routes/updateTask");
const deleteTask = require("./routes/deleteTask");
const authenticateToken = require("./middleware/authenticateToken");

//Chained router route for Root Route
router.route("/").get(function (req, res) {
  res.send("<h1>welcome to my backend service</h1>")
});

//Login Route
router
  .route("/login")
  .get((req,res)=>{
    res.send("<h3>Running<h3>")
  })
  //validation and login
  .post(validation, login);

//Register Route
router
  .route("/register")
  .get((req,res)=>{
    res.send("<h3>Running<h3>")
  })
  //validation and register function
  .post(validation, register);

//Get all tasks data from db     
router
  .route("/task/all/")
  .get(getTask);

//Add a task                     
router
  .route("/task/add/")
  .get((req,res)=>{
    res.send("<h3>Running<h3>")
  })
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
