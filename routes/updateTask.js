const Task = require('../schema/task');

const updateTask = (req, res) => {
  // create mongose method to update an existing record into collection
  let id = req.params.id;
  var data = {
    tasks: req.body.tasks,
  };
  // save the user
  Task.findByIdAndUpdate(id, data, function (err, m) {
    if (err) {
      throw err;
    } else {
      res.json({result:"Success"});
    }
  });
}

module.exports=updateTask