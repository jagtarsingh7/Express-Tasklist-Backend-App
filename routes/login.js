const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../schema/users');

const login = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    User.find({ email: email })
        .lean()
        .exec(async function (err, user) {
            // if there is an error retrieving, send the error otherwise send data
            if (err) res.send(err);
            try {
                if (await bcrypt.compare(password, user[0].password)) {
                    let payload = {
                        name: user[0].name,
                    };
                    let token = jwt.sign(payload, process.env.PRIVATE_KEY);
                    res.json(token);

                } else {
                    res.json({result:"Not Allowed"});
                }
            } catch {
                res.status(500).send();
            }
        });
}
module.exports = login;

