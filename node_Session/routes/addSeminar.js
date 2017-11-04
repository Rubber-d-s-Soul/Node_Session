/* Card登録用のページ */
var express = require('express');
var router = express.Router();

/* addseminar card登録ページ */
router.get('/', function(req, res, next) {
    var data = {
        title: 'Seminarの登録',
    }
    res.render('addSeminar', data);
});

/* addSeminar card データ登録　*/
//SelectBoxの値の取り方について
//https://stackoverflow.com/questions/18581459/get-dropdown-value-using-express-in-node-js-from-html-page
router.post('/post', function(req, res, next) {

    var data = {
        title: 'addCard',
        msg: 'Card登録が完了しました'
    }
    res.render('addSeminar', data);
});

module.exports = router;