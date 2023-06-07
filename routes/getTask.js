const Task = require('../schema/task');

const getTask = (req, res) => {
  // use mongoose to get all todos in the database
  let number = req.query.page;
  Task.find()
    .limit(20)
    .skip(number * 20)
    .lean()
    .exec(function (err, movies) {
      // if there is an error retrieving, send the error otherwise send data
      if (err) res.send(err);
      res.json({ data: movies });
    });
}

module.exports=getTask