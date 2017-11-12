$(function() {
    //
    $(".button-collapse").sideNav();
});
var common = {
    ajax_req: function(url, type, datatype, data, func) {
        console.log("[ajax_req]");
        console.log(url);
        console.log(type);
        console.log(datatype);
        console.log(data);
        $.ajax({
            url: url,
            type: type,
            dataType: datatype,
            data: data
        }).done(function(data, textStatus, jqXHR) {
            alert("success");
            if (func != "") {
                func(data);
            }
        }).fail(function(jqXHR, textStatus, errorThrown) {
            alert("error");

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
    },
    ajax_status: function(data) {
        console.log("[ajax_function]");
        if (data.status) {
            alert(data.msg);
            var url = data.url;
            location.href = url;
        } else {
            var msg = data.msg;
            $("#msg").css("color", "red").text(msg);
        }
    }
}

var conf = {
    ajaxType: {
        get: "GET",
        post: "POST"
    },
    ajaxDataType: {
        json: "json",
        html: "html"
    }
}