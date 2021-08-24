const express = require('express');
let router = express.Router();
require('dotenv').config();
const { checkLoggedIn } = require('../../middleware/auth');
const { grantAccess } = require('../../middleware/roles');

const { User } = require('../../models/user_model');

router.route('/register').post(async (req, res) => {
  try {
    ///1 check if email taken
    if (await User.emailTaken(req.body.email)) {
      return res.status(400).json({ message: 'Sorry email taken' });
    }

    if (await User.usernameTaken(req.body.username)) {
      return res.status(400).json({ message: 'Username taken' });
    }

    /// create model and hash pass

    const user = new User({
      email: req.body.email,
      password: req.body.password,
      username: req.body.username,
    });

    /// 3 generate token
    const token = user.generateToken();
    const doc = await user.save();

    // 4 send email

    // save...send token with cookie
    res.cookie('x-access-token', token).status(200).send(getUserProps(doc));
  } catch (error) {
    res.status(400).json({ message: 'Error', error: error });
  }
});

router.route('/signin').post(async (req, res) => {
  try {
    // FIND USER
    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).json({ message: 'Bad email' });

    /// COMPARE PASSWORD
    const compare = await user.comparePassword(req.body.password);
    if (!compare) return res.status(400).json({ message: 'Bad password' });

    // GENERATE TOKEN
    const token = user.generateToken();

    //RESPONSE
    res.cookie('x-access-token', token).status(200).send(getUserProps(user));
  } catch (error) {
    res.status(400).json({ message: 'Error', error: error });
  }
});

router
  .route('/profile')
  .get(checkLoggedIn, grantAccess('readOwn', 'profile'), async (req, res) => {
    try {
      const permission = res.locals.permission;
      const user = await User.findById(req.user._id);
      if (!user) return res.status(400).json({ message: 'User not found' });
      res.status(200).json(permission.filter(user._doc));
    } catch (error) {
      res.status(400).send(error);
    }
  })
  .patch(
    checkLoggedIn,
    grantAccess('updateOwn', 'profile'),
    async (req, res) => {
      try {
        const user = await User.findOneAndUpdate(
          { _id: req.user._id },
          {
            $set: {
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              location: req.body.location,
            },
          },
          { new: true }
        );
        if (!user) return res.status(400).json({ message: 'User not found' });
        res.status(200).json(getUserProps(user));
      } catch (error) {
        res.status(400).json({ message: 'Error updating user', error: error });
      }
    }
  );

router
  .route('/updateemail')
  .patch(
    checkLoggedIn,
    grantAccess('updateOwn', 'profile'),
    async (req, res) => {
      try {
        if (await User.emailTaken(req.body.newemail)) {
          return res.status(400).json({ message: 'This email is taken' });
        }
        const user = await User.findOneAndUpdate(
          { _id: req.user._id, email: req.body.email },
          { $set: { email: req.body.newemail } },
          { new: true }
        );

        if (!user) return res.status(400).json({ message: 'User not found' });
        const token = user.generateToken();
        res
          .cookie('x-access-token', token)
          .status(200)
          .send({ email: user.email });
      } catch (error) {
        res
          .status(400)
          .json({ message: 'Error updating user email', error: error });
      }
    }
  );

router
  .route('/updateusername')
  .patch(
    checkLoggedIn,
    grantAccess('updateOwn', 'profile'),
    async (req, res) => {
      try {
        if (await User.usernameTaken(req.body.newusername)) {
          return res.status(400).json({ message: 'This username is taken' });
        }
        const user = await User.findOneAndUpdate(
          { _id: req.user._id },
          {
            $set: {
              username: req.body.newusername,
            },
          },
          { new: true }
        );

        if (!user) return res.status(400).json({ message: 'User not found' });
        res.status(200).send({ username: user.username });
      } catch (error) {
        res
          .status(400)
          .json({ message: 'Error updating username', error: error });
      }
    }
  );

router.route('/isauth').get(checkLoggedIn, async (req, res) => {
  res.status(200).send(getUserProps(req.user));
});

const getUserProps = (user) => {
  return {
    _id: user._id,
    email: user.email,
    username: user.username,
    firstname: user.firstname,
    lastname: user.lastname,
    role: user.role,
    location: user.location,
  };
};

module.exports = router;
