const express = require('express');
const bodyparser = require('body-parser');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.get('/logout', authController.logout);

router.get('/:id', userController.getUser);

module.exports = router;