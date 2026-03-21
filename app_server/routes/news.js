var express = require('express');
var router = express.Router();
const ctrlNews = require('../controllers/news');

/* Get home page. */
router.get('/', ctrlNews.renderNews);

module.exports = router;
