var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('newusers.ejs', { 
    title: 'Ny Bruker',
    subtitle: 'Legg til ny bruker' 
  });
});

module.exports = router;