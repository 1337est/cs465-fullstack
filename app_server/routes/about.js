var express = require('express');
var router = express.Router();
const ctrlAbout = require('../controllers/about');

/* Get home page. */
router.get('/', ctrlAbout.renderAbout);

module.exports = router;
