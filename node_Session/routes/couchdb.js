/**/
const NodeCouchDb = require('node-couchdb');
/*timestamp用*/
var moment = require("moment");


const couch = new NodeCouchDb({
    host: '127.0.0.1',
    protocol: 'http',
    port: 5984,
    auth: {
        user: 'admin',
        pass: 'password'
    }
});

//document追加
exports.createDoc = function(dbname, data) {
    console.log("[create] : " + dbname);
    console.log(data);

    console.log(Object.keys(data));

    var status;
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

    console.log("[title] : " + title);
    console.log("[type] : " + type);
    console.log("[category] : " + category);
    console.log("[target] : " + target);
    console.log("[explain] : " + explain);
    console.log("[date] : " + datetime);
    console.log("[tags] : " + tags);
    console.log("[name] : " + name);
    console.log("[mail] : " + mail);
    console.log("[member] : " + member);
    console.log("[part_member] : " + part_member);
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
    }, err => {
        console.log("[couch createDoc ERROR]");
        console.log(err.body);
        status = false;
    });
    return status;
}

//document更新
exports.updateDoc = function(dbname, data) {
    console.log("[update] : " + dbname);
}

//document削除
exports.deleteDoc = function(dbname, data) {
    console.log("[update] : " + dbname);
}