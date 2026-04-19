const express = require('express');
const router = express.Router();
const controller = require('../controllers/trips');

router.route('/trips')
  .get(controller.tripsList)
  .post(controller.tripsAddTrip);

router.route('/trips/:tripCode')
  .get(controller.tripsFindByCode)
  .put(controller.tripsUpdateTrip);

module.exports = router;
