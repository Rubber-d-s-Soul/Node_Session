/* ユーザ登録用のページ */
var express = require('express');
var router = express.Router();

/* signup ユーザ登録ページ */
router.get('/', function(req, res, next) {
    var data = {
        title: 'SignUp',
        msg: 'ユーザを登録します'
    }
    res.render('signup', data);
});

/* signup ユーザ登録　データ登録　*/
router.post('/post', function(req, res, next) {
    var username = req.body['username'];
    var mail = req.body['mail'];
    var password = req.body['password'];
    console.log("[username] : " + username);
    console.log("[mail] : " + mail);

    var data = {
        title: 'SignUp',
        msg: username + 'さんのユーザ登録が完了しました'
    }
    res.render('signup', data);
});

module.exports = router;