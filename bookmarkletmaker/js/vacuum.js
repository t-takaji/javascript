chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  var requestTargetArray = msg.valueTarget;
  var operationTargetArray = msg.operationTarget;
  var requestTargetStr = requestTargetArray[0];

  for (var i = 1; i < requestTargetArray.length; i++) {
    requestTargetStr = requestTargetStr + "," + requestTargetArray[i];
  }

  // value を取得する対象
  var element = $(requestTargetStr);
  // 生成するscriptコードのプレフィックス
  var codePrefix = "javascript:(function(){input(); function input(){";
  // 生成するscriptコードのサフィックス
  var codeSuffix = "}})();";
  // 動的コード
  var codeBody = "";

  for (var i = 0; i < element.length; i++) {
    // 値が設定されているもののみ対象
    if (element[i].value != null && element[i].value != "") {
      // コード作成
      codeBody += "document.getElementById('" + element[i].id + "').value='" + element[i].value + "';";
    }
  }

  // 指定操作あるならコード追加
  for (var i = 0; i < operationTargetArray.length; i++) {
    codeBody += "document.getElementById('" + operationTargetArray[i] + "').click();";
  }
  var response = {data: codePrefix + codeBody + codeSuffix};

  // レスポンス返却
  sendResponse(response);
});
