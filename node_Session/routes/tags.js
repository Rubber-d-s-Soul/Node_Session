/* タグ一覧ページサーバ側 */
var express = require('express');
var router = express.Router();
var couch = require('./couchdb.js');

var dbname = 'tags_db';

/* GET home page. */
router.get('/', function(req, res, next) {
    var viewUrl = '_design/tags/_view/get_all';

    //couchDBからtagsデータ取得
    var couchdb = couch.couchdb;
    couchdb.get(dbname, viewUrl).then(({ data, headers, status }) => {
        console.log("[couchDB " + dbname + " ] get SUCCESS");
        console.log(data.rows);

        var data = {
            title: 'Tags page',
            msg: 'タグ一覧ページ',
            tagList: data.rows
        }
        res.render('tags', data);

    }, err => {
        console.log("[couchDB ERROR]");
        var data = {
            title: 'Tags page',
            msg: 'dataの取得に失敗しました'
        }
        res.render('tags', data);
    });
});

module.exports = router;