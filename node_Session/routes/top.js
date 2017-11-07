/* トップページサーバ側 */
var express = require('express');
var router = express.Router();

/*db*/
var couch = require('./couchdb.js');
var couchdb = couch.couchdb;

/* GET home page. */
router.get('/', function(req, res, next) {
            var id = req.body['id'];

            //id,passwordをチェック
            couchdb.get(dbname, viewUrl.then(({ data, headers, status }) => {
                    //ログインOKの場合
                    console.log("couchdb login user success");
                    console.log(data);

                    req.session.id = id;
                    //その他初期用データ取得する

                    var data = {
                        title: 'TopPage',
                        id: req.session.id
                    }

                    res.render('top', data);
                }, err => {
                    //ログインエラーの場合
                    console.log("couchdb login user error");

                    res.render('login', { title: 'login' });
                });
            });

        router.post('/', function(req, res, next) {
            res.render('top', { title: 'トップページ' });
        });

        module.exports = router;