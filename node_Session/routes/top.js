/* トップページサーバ側 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('top', { title: 'トップページ' });
});

router.post('/', function(req, res, next) {
    res.render('top', { title: 'トップページ' });
});

module.exports = router;