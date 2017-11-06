/* トップページサーバ側 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var id = req.body['id'];
    req.session.id = id;

    var data = {
        title: 'TopPage',
        id: req.session.id
    }

    res.render('top', data);
});

router.post('/', function(req, res, next) {
    res.render('top', { title: 'トップページ' });
});

module.exports = router;