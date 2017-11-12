/* Card登録用のページ */
var express = require('express');
var router = express.Router();
/*timestamp用*/
var moment = require("moment");
/*couchDB*/
var db = require('./couchdb.js');
var couch = db.couchdb;


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
    var result = {};
    console.log("[create] : " + dbname);
    console.log(data);

    var title = data.title;
    console.log("[title] : " + title);
    var type = data.type;
    console.log("[type] : " + type);
    var category = data.category;
    console.log("[category] : " + category);
    var target = data.target;
    console.log("[target] : " + target);
    var explain = data.explain;
    console.log("[explain] : " + explain);
    var datetime = data.date;
    console.log("[datetime] : " + datetime);
    var tags = data['tags[]'];
    console.log("[tags] : " + tags);
    var name = data.name;
    console.log("[name] : " + name);
    var mail = data.mail;
    console.log("[mail] : " + mail);

    var member = data.member;
    console.log("[member] : " + member);

    var part_member = [];
    var createtime = moment().format("YYYY/MM/DD HH:mm:ss");
    console.log("[createtime] : " + createtime);


    couch.insert(dbname, {
        title: title,
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
    }).then(({ data, headers, status }) => {
        console.log("[couch createDoc SUCCESS]");
        console.log("[ status ] : " + status);
        console.log(status);
        status = true;
        url = "/seminar";
        msg = "DB登録成功";
        result = {
            "status": status,
            "url": url,
            "msg": msg
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