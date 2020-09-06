const mongoose = require('mongoose');

// "hostUser": "Farhan",

const requestSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: [true, 'Please enter event name!']
  },
  hostUser: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'Request must belong to a User!']
  },
  description: {
    type: String,
    required: [true, 'Request must have a description!']
  },
  maxVolunteers: {
    type: Number,
    required: [true, 'Request must have the number of volunteers required!']
  },
  volunteers: {
    type: [mongoose.Schema.ObjectId]
  },
  catagory: {
    type: String,
    required: [true, 'Request must have a catagory!']
  },
  deadline: {
    type: Date,
    required: [true, 'Request must have a deadline to apply!']
  },
  time: {
    type: Date,
    required: [true, 'Request must have a time for volunteer to be there!']
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  status: {
    type: String,
    enum: ['approved', 'pending', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Request = mongoose.model('Requests', requestSchema);

module.exports = Request;
