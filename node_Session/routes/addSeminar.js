/* Card登録用のページ */
var express = require('express');
var router = express.Router();


var couch = require('./couchdb.js');

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
router.post('/create', function(req, res, next) {
    var data = req.body;
    var dbname = "seminar_db";
    var status, msg;
    var result = {
        "result": status,
        "url": "/seminar",
        "msg": msg
    }

    status = couch.createDoc(dbname, data);
    console.log(status);

    msg = (status) ? "DB登録SUCCESS" : "DB ERROR";

    /*succuess /error時分ける
    if (status) {
        console.log("success");
       
    } else {
        console.log("error");
        var errordata = {
            title: 'Seminarの登録(Error)',
        }
        res.render('addSeminar', errordata);
    }*/
    res.send(result);
});

module.exports = router;