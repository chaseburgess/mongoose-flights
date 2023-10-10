const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;
	
const movieSchema = new Schema({
  airline:{
    type: String,
    enum: ['American', 'Delta', 'United']
  }
  airport: {
    type: String,
    enum: ['CDG', 'DEN', 'PDX', 'PHX', 'SEA', 'SFO'],
    default: 'PHX',
  },
  flightNo: {
    type: Number;
    required: true,
    min: 10,
    man: 9999,
  },
  departs: {
    type: Date,
  },
  destinations: [destinationsSchema]
});

module.exports = mongoose.model('Flight, flightSchema');