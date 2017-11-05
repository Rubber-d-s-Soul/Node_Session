$(function() {
    //入力フォームのバリデーション
    $(document).ready(function() {
        $.validator.setDefaults({
            ignore: []
        });

        $("#addSeminarForm").validate({
            rules: {
                title: {
                    required: true,
                    minlength: 5
                }
            },
            type: "required",
            category: "required",
            errorClass: "invalid form-error",
            errorElement: 'div',
            errorPlacement: function(error, element) {
                error.appendTo(element.parent());
            }
        });
    });




    //登録ボタンクリック時
    $(add_semi.id.add_semi_btn).on("click", function() {
        console.log("[addSeminar btn] click");
        //データ取得
        var title = $("#title").val();
        $("#title").focus();
        $("#title").blur();
        console.log("[title] : " + title);

        //タイプ
        var seminarType = $("[name=type] option:selected").val();
        console.log("[type] : " + type);

        //カテゴリー
        var category = $("[name=category] option:selected").val();
        console.log("[category] : " + category);

        //説明
        var explain = $("#explain").val();
        console.log("[explain] : " + explain);

        //対象者について
        var target = $("#target").val();
        console.log("[target] : " + target);

        //日付
        var date = $("#date").val();
        console.log("[date] : " + date);

        //日付
        var tags = $("#tags").val();
        console.log("[tags] : " + tags);

        //名前
        var $name = $("#name");
        var name = $name.val();
        $name.focus().blur();
        console.log("[name] : " + name);

        //メール
        var $email = $("#email");
        var email = $email.val();
        $email.focus().blur();
        console.log("[email] : " + email);

        //募集人数
        var $member = $("#group");
        var member = $member.val();
        $member.focus().blur();
        console.log("[group] : " + member);

        var url = add_semi.ajaxUrl.addSeminar;
        var type = conf.ajaxType.post;
        var dataType = conf.ajaxDataType.json;


        if (title == "" || name == "" || email == "" || member == "") return false;

        var data = {
            "title": title,
            "type": seminarType,
            "category": category,
            "target": target,
            "explain": explain,
            "date": date,
            "tags": tags,
            "name": name,
            "mail": email,
            "member": member,
        };
        //ajaxReq
        common.ajax_req(url, type, dataType, data, common.move_browse);
    });

});

var add_semi = {
    id: {
        add_semi_btn: "#addSeminar_btn"
    },
    ajaxUrl: {
        addSeminar: "/addSeminar/create"
    }
}