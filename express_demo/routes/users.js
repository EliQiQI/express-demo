var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/session-test', (req, res, next) => {
  const session = req.session
  if (session.viewNum === null) {
    session.viewNum=0
  }
  session.viewNum++

  res.json({
    viewNum: session.viewNum
  })

})
module.exports = router;
