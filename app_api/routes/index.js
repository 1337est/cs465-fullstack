const express = require('express');
const router = express.Router();

const controller = require('../controllers/trips');

router.get('/trips', controller.tripsList);
router.get('/trips/:tripCode', controller.tripsFindByCode);

module.exports = router;
