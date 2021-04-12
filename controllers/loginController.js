const express = require('express');
const { validateUserLogin } = require('../middlewares/UserMiddleware');
const tokenGenerator = require('../utils/TokenGenerator');

const router = express.Router();

router.post('/', validateUserLogin, async (req, res) => {
  const { user } = res.locals;
  const { password: pwd, ...UserWithoutPassword } = user;
  const token = tokenGenerator(UserWithoutPassword);
  res.locals.user = token;
  res.status(201).json({ token });
});

module.exports = router;
