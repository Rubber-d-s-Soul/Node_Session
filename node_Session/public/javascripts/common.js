$(function() {
    //
    $(".button-collapse").sideNav();
});
var common = {
    ajax_req: function(url, type, datatype, data, func) {
        console.log("[ajax_req]");

        $.ajax({
            url: url,
            type: type,
            dataType: datatype,
            data: data,
            success: function(result) {
                console.log(result);

                func(result);
            },
            error: function(jqXHR, textStatus, errorThrown) {

                alert('Error connecting to the Node.js server... ' + textStatus + " " + errorThrown);
            }
        });
    },
    reload_browse: function(result) {
        console.log("[reload_browse]");
        alert("[reload_browse]");
        location.reload();
    },
    move_browse: function(data) {
        console.log("[move_browse]");

        location.href = data.url;
    },
    empty_alert: function(data) {
        if (data == "") {
            alert("入力してください");
            return false;
        }
    }
}

var conf = {
    ajaxType: {
        get: "GET",
        post: "POST"
    },
    ajaxDataType: {
        json: "json"
    }
}