var express = require('express');
var router = express.Router();
const handlers = require('../lib/handlers');

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

router.get('/newsletter-signup', handlers.newsletterSignup);
router.post('/newsletter-signup/process', handlers.newsletterSignupProcess);
router.get('/newsletter-signup/thank-you', handlers.newsletterSignupThankYou);

module.exports = router;
