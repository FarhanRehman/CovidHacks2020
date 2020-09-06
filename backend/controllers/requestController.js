const Request = require('../models/newRequest');

const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');

// create request
exports.createRequest = factory.createOne(Request);

// get all request
exports.getAllRequests = factory.getAll(Request);

// get request by id
exports.getRequest = factory.getOne(Request);

// approve request
exports.approveRequest = factory.updateOne(Request);

// update volunteer list in request
exports.addVolunteer = factory.updatePushOne(Request);
