const User = require('../../../../models/user');

module.exports = (req, res, next) => {
  var user = new User(req.body);

  user.save(function (err) {
    if (err) {
      next(err);
    } else {
      res.json(user);
    }
  });
};
