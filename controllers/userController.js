const User = require('../models/userModel');
const handler = require('../controllers/handler');

exports.getUser = handler.getOne(User);