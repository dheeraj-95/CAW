const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

process.on('uncaughtException', err => {
    console.log(err.name, err.message);
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down');
    process.exit(1);
});

dotenv.config({ path: './config.env' });
const DB = process.env.DB;

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('DB Connected!');
    });

const port = process.env.PORT || 8000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

process.on('unhandledRejection', err => {
    console.log(err.name, err.message);
    console.log('UNHANDLED REJECTION! 💥 Shutting down');
    server.close(() => {
        process.exit(1);
    });
});