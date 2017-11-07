$(function() {

    console.log("1");

    var msg = say("2");
    console.log(msg);

    console.log("3");

})

function say(msg) {
    for (var i = 0; i < 900000000; i++) {

    }
    return msg;
}