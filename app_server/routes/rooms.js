var express = require('express');
var router = express.Router();
const ctrlRooms = require('../controllers/rooms');

/* Get home page. */
router.get('/', ctrlRooms.renderRooms);

module.exports = router;
