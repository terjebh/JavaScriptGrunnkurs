var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { 
    title: 'Min App',
    subtitle: 'Dette er en express app' 
  });
});

module.exports = router;
