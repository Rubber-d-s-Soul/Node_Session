/* タグ一覧ページサーバ側 */
var express = require('express');
var router = express.Router();
var couch = require('./couchdb.js');

/*timestamp用*/
var moment = require("moment");

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

/*add tag */
router.post('/create', function(req, res, next) {
    var data = req.body;
    var dbname = "tags_db";
    var status, msg;
    var result = {
        "result": status,
        "url": "/tags",
        "msg": msg
    }

    var couchdb = couch.couchdb;
    var tag = data.tag;
    var createtime = moment().format("YYYY/MM/DD HH:mm:ss");
    //couchにデータ登録

    //すでに登録されている名前かどうか確認する処理入れる

    couchdb.insert(dbname, {
        tag: tag,
        createtime: createtime,
        updatetime: createtime,
    }).then(({ data, headers, status }) => {
        console.log("[couch createDoc SUCCESS]");
        console.log("[ status ] : " + status);
        console.log(status);
        status = true;
    }, err => {
        console.log("[couch createDoc ERROR]");
        console.log(err.body);
        status = false;
    });

    console.log(status);

    msg = (status) ? "DB登録SUCCESS" : "DB ERROR";

    res.send(result);
});

module.exports = router;