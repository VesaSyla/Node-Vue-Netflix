const express = require('express');
const router = express.Router();
const { isAuth, isAdmin } = require('../util');

const { users, login, register } = require('../controllers/user');

router.get('/', isAuth, isAdmin, users);
router.post('/login', login);
router.post('/register', register);

module.exports = router;