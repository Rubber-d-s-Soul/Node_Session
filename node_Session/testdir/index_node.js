/*非同期処理について*/

console.log("1");

var msg;
setTimeout(function() {
    msg = 2;
}, 0);
console.log(msg);

console.log("3");