/* 勉強会一覧ページサーバ側 */
var express = require('express');
var router = express.Router();

var db = require('./couchdb.js');
var couch = db.couchdb;

/* GET home page. */
router.get('/', function(req, res, next) {
    var dbname = "";
    var viewUrl = "";

    /*couchからデータを取得する
    couch.get(dbname, viewUrl).then(({ data, headers, status }) => {
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
            title: 'Seminor page',
            msg: 'dataの取得に失敗しました'
        }
        res.render('tags', data);
    });
    */
    var data = {
        title: 'Tags page',
        msg: 'タグ一覧ページ',
        /* tagList: data.rows*/
    }
    res.render('seminars', data);
});

module.exports = router;