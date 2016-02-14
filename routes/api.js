var express = require('express');
var router = express.Router();
var api = require('../api/api');
/* GET users listing. */
/*router.get('/', function(req, res, next) {
    res.send('api');
});*/
router.get('/', api.respond());

module.exports = router;
