const deleteTask = (req, res) => {
  let id = req.params.id;
  Movie.remove(
    {
      _id: id,
    },
    function (err) {
      if (err) res.send(err);
      res.json({result:"Success"})
    }
  );
}