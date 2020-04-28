const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

const { signin, signup } = require('../controllers/user');

router.post('/sign-in', signin);
router.post('/sign-up', signup);

module.exports = router;
