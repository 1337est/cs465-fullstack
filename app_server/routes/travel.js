var express = require('express');
var router = express.Router();
const ctrlTravel = require('../controllers/travel');

/* Get home page. */
router.get('/', ctrlTravel.renderTravel);

module.exports = router;
