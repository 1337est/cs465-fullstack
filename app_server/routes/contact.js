var express = require('express');
var router = express.Router();
const ctrlContact = require('../controllers/contact');

/* Get home page. */
router.get('/', ctrlContact.renderContact);

module.exports = router;
