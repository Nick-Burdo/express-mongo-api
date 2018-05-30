const User = require('../../../../models/user');

module.exports = (req, res, next, id) => {
  User.findOne({_id: id}, function (err, user) {
    if (err) {
      next(err);
    } else {
      req.user = user;
      next();
    }
  });
};
