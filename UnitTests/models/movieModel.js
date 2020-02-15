const mongoose = require('mongoose');

let RowSchema = new mongoose.Schema({
	numberOfSeats: {
		type: Number,
    required: true
	},
	reservedSeats: {
		type: [Number],
    default: []
	}
});

let ScreenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  seatInfo: {
    type: Map,
		of: RowSchema,
    required: true
  }
});

module.exports = mongoose.model('Movie', ScreenSchema);