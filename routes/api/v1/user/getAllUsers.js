const User = require('../../../../models/user');

module.exports = (req, res, next) => {
  User.find(function (err, users) {
    if (err) {
      next(err);
    } else {
      res.json(users);
    }
  });
};