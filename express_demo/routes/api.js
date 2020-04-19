var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({
        errno: 0,
        data: {
            msg: 'hello world'
        }
  });
});

module.exports = router;
