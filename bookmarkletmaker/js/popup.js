$(function () {
    $("#exeVacuum").click(function () {
        chrome.tabs.getSelected(null, function (tab) {
            var operationTargetArray = new Array();
            $('input[name=vacOperationTarget]').each(function () {
                if ($(this).val() != "") {
                    operationTargetArray.push($(this).val());
                }
            });
            var selectTargetArray = new Array();

            $('input[name=valueTarget]:checked').each(function () {
                selectTargetArray.push($(this).val());
            });

            chrome.tabs.sendMessage(tab.id, {
                valueTarget: selectTargetArray,
                operationTarget: operationTargetArray
            }, function (response) {
                $('#resCode').val(response.data);
                $('#resCodeArea').show();
            });
        });
    });

    $("#addOperationTarget").click(function () {
        $("#operationArea").append("<br /><input type=\"text\" name=\"vacOperationTarget\" value=\"\" placeholder=\"操作対象のIDを入力\" value=\"\" class=\"form-control\" />");
    });
});
