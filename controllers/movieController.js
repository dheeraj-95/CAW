const Movie = require('../models/movieModel');
const moment = require('moment');
let { isAvailable } = require('../utils/checkAvailability');
let { getUnreservedSeats } = require('../utils/unreservedSeats');

const days = ['Today', 'Tomorrow', moment().add(2, 'days').format('ddd, MMM D')];
const times = ['9:00 AM', '11:10 AM', '12:00 PM', '1:50 PM', '4:30 PM', '6:00 PM', '7:10 PM', '9:45 PM'];

const movieslist = [
    {
        title: 'Titanic',
        days: days,
        times: times
    },
    {
        title: 'Avengers',
        days: days,
        times: times
    },
    {
        title: 'Avatar',
        days: days,
        times: times
    },
    {
        title: 'Kung fu Panda',
        days: days,
        times: times
    },
    {
        title: 'Despicable me',
        days: days,
        times: times
    }
];

exports.moviesWithTimes = (async (req, res, next) => {
    try{
        res.status(200).json({
            status : 'success',
            movies : movieslist
        })
    }catch (e) {
        res.status(400).send(e);
    }
});

//API to accept details of movie screen
exports.seatsInMovie = async (req, res) => {
    try {
        let movie = new Movie(req.body);
        await movie.save();
        res.status(200).json({
            status : 'success'
        });
    } catch (e) {
        res.status(400).send(e);
    }
};

//API to book tickets for given seats in a given Movie
exports.bookTickets = async (req, res, next) => {
    try {
        let screenName = req.params.screen_name;
        let seats = req.body.seats;
        await isAvailable(screenName, seats);
        res.status(200).json({
            status : 'success',
            message : 'Reservation is successful'
        });
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.seatsAvailability = async (req, res, next) => {
    try {
        let query = req.query;
        if (query.status && query.status === 'unreserved') {//to get the available seats for a given screen
            let unreservedSeats = await getUnreservedSeats(req.params.screen_name);
            res.send(unreservedSeats);
        }
    } catch (e) {
        res.status(400).send(e);
    }
};