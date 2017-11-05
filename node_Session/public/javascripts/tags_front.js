$(function() {
    $("#addTag_modalbtn").on("click", function() {
        console.log("　[tag登録]　");

        var newtag = $("#addTag_Form").val();

        var data = { 'tag': newtag };

        var url = tags.ajaxUrl.addTag;
        var type = conf.ajaxType.post;
        var datatype = conf.ajaxDataType.json;
        var func = common.move_browse;
        console.log(data);
        common.ajax_req(url, type, datatype, data, func);
    });
});

var tags = {
    ajaxUrl: {
        addTag: "/tags/create"
    }
}