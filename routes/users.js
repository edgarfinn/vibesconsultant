var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json([{
    id: 1,
    username: "User test one"
  }, {
    id: 2,
    username: "User test two"
  }])
});

module.exports = router;
