const { body, check, validationResult } = require("express-validator");

const validation = (req, res, next) => {
  check("email").isEmail().run(req);
  check("password").isLength({ min: 6 }).run(req);

  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }
  next();
}
module.exports=validation