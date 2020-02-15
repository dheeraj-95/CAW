const express = require('express');
const bodyparser = require('body-parser');
let movieController = require('../controllers/movieController');
//let userController = require('../controllers/authController');

// Init Router
const router = express.Router();

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));

//router.get('/',movieController.index);

router.post('/screens', movieController.seatsInMovie);
router.post('/screens/:screen_name/reserve', [
    //userController.login,
    movieController.bookTickets
]);
router.get('/screens/:screen_name/seats', movieController.seatsAvailability);
router.get('/moviesWithTimes', movieController.moviesWithTimes);

module.exports = router;
