const express = require('express');
const requestController = require('./../controllers/requestController');
const authController = require('./../controllers/authController');

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

router.post('/', requestController.createRequest);
router.patch('/:id/addVolunteer', requestController.addVolunteer);

router.use(authController.restrictTo('admin'));

router.route('/all').get(requestController.getAllRequests);
router
  .route('/:id')
  .get(requestController.getRequest)
  .patch(requestController.approveRequest);

module.exports = router;
