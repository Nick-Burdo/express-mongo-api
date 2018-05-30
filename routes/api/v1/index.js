const express = require('express');
const router = express.Router();
const passport = require('passport');
const signUp = require('./auth/signUp');
const login = require('./auth/login');
const custom = require('./custom');
const createUser = require('./user/createUser');
const getAllUsers = require('./user/getAllUsers');
const getOneUser = require('./user/getOneUser');
const updateUser = require('./user/updateUser');
const deleteUser = require('./user/deleteUser');
const getByIdUser = require('./user/getByIdUser');

/* User login. */
router.post('/login', login);

/* Sign up new user. */
router.post('/sign-up', signUp);

/* GET custom info. */
router.get('/custom', passport.authenticate('jwt', { session: false }), custom);

router.route('/users')
  .post(createUser)
  .get(getAllUsers);
  // .post(passport.authenticate('jwt', { session: false }), createUser)
  // .get(passport.authenticate('jwt', { session: false }), getAllUsers);

router.route('/users/:userId')
  .get(getOneUser)
  .put(updateUser)
  .delete(deleteUser);

router.param('userId', getByIdUser);

module.exports = router;