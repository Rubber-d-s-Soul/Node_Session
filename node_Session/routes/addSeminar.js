/* Card登録用のページ */
var express = require('express');
var router = express.Router();
/*timestamp用*/
var moment = require("moment");
/*couchDB*/
var db = require('./couchdb.js');



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
    debugger;
    var couch = db.couchdb;
    var dbname = "seminar_db";
    var status;
    var msg;
    var nexturl;
    var result = {};

    var data = req.body;
    console.log("[create] : " + dbname);
    console.log(data);

    var title = data.title;
    var type = data.type;
    var category = data.category;
    var target = data.target;
    var explain = data.explain;
    var datetime = data.date;
    var tags = data['tags[]'];
    var name = data.name;
    var mail = data.mail;
    var member = data.member;
    var part_member = [];
    var createtime = moment().format("YYYY/MM/DD HH:mm:ss");

    console.log("data 作成");

    couch.insert(dbname, {
        /* title: title,
         type: type,
         category: category,
         explain: explain,
         target: target,
         tags: tags,
         date: datetime,
         name: name,
         mail: mail,
         member: member,
         part_member: part_member,
         createtime: createtime,
         updatetime: createtime,
         */
        title: title,
        tags: tags,
        createtime: createtime,
        updatetime: createtime,
    }).then(({ data, headers, status }) => {
        console.log("[couch createDoc SUCCESS]");

        status = true;
        url = "/seminar";
        msg = "DB登録成功";
        result = {
            'status': status,
            'url': url,
            'msg': msg
        };
        console.log(result);
        res.send(result);
    }, err => {
        console.log("[couch createDoc ERROR]");
        console.log(err.body);
        status = false;
        msg = "DB登録エラー"
        result = {
            "status": status,
            "url": "/seminar",
            "msg": msg
        }
        res.send(result);
    });
});

module.exports = router;