var express = require('express');
var router = express.Router();
const ctrlMeals = require('../controllers/meals');

/* Get home page. */
router.get('/', ctrlMeals.renderMeals);

module.exports = router;
