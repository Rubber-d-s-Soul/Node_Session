/*各ユーザ用のページ*/
var express = require('express');
var router = express.Router();

/*  */
router.post('/', function(req, res, next) {
    var id = req.body['id'];
    var password = req.body['password'];
    console.log(id + " : " + password);
    res.render('userpage', { title: 'Login' });
});

module.exports = router;