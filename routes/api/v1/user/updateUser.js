const User = require('../../../../models/user');

module.exports = (req, res, next) => {
  User.findByIdAndUpdate(req.body._id, req.body, {new: true}, function (err, user) {
    if (err) {
      next(err);
    } else {
      res.json(user);
    }
  });
};