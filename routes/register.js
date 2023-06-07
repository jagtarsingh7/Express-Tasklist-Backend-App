const bcrypt = require('bcrypt');
const User = require('../schema/User');

const register = async (req, res) => {
  // Handle the request 
  let salt = await bcrypt.genSalt();
  let hashedPassword = await bcrypt.hash(req.body.password, salt);

  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    },
    function (err, movie) {
      if (err) res.send(err);
      res.json({result:"Success"})
    }
  );
}

module.exports=register