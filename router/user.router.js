require('express-async-errors');
const { login } = require('../controllers/user.controller');
const asyncHandler = require('../handlers/async');

const router = require('express').Router();

router.post('/login', asyncHandler(login));

module.exports = router;