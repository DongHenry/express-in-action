var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/foo', (req, res, next) => {
  res.render('foo', { x: 'x' });
});

router.get('/section-test', (req, res, next) => {
  res.render('section-test');
});

module.exports = router;
