var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index');
});
router.get('/premium', function(req, res) {
  res.render('premium');
});

module.exports = router;
