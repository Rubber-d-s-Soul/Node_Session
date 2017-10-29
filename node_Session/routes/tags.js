/* タグ一覧ページサーバ側 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('tags', { title: 'タグ一覧ページ' });
});

module.exports = router;