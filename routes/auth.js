const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const { auth } = require('../middleware/auth');

const { signin, signup, curent } = require('../controllers/user');

router.post('/sign-in', signin);
router.post('/sign-up', signup);
router.get('/current', auth, curent);

module.exports = router;
