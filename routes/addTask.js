const Task = require('../schema/task');

const addTask= (req, res) =>{
    // create mongose method to create a new record into collection
    Task.create(
      {
        name:req.body.name,
        tasks:req.body.tasks
      },
      function (err, task) {
        if (err) res.send(err);
        res.json({result:"Success"})
      }
    );
  }

module.exports=addTask