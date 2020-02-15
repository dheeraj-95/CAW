const express = require('express');
const morgan = require('morgan');
const userRouter = require('./routes/userRoutes');
const moviesRouter = require('./routes/movieRoutes');

const app = express();

// Post forms instead of API's
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
app.use('/users', userRouter);
app.use('/movies', moviesRouter);

module.exports = app;