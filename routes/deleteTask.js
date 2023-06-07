const Task = require('../schema/task');

const deleteTask = (req, res) => {
  let id = req.params.id;
  Task.remove(
    {
      _id: id,
    },
    function (err) {
      if (err) res.send(err);
      res.json({result:"Success"})
    }
  );
}
module.exports=deleteTask