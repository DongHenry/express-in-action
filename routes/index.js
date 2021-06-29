var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/foo', (req, res, next) => {
  res.render('foo', { x: 'x' });
});

module.exports = router;
