// JavaScriptのDateオブジェクトを使用して現在の日時を取得し、それをメッセージと一緒にFirebaseに保存
onChildAdded(dbRef, function (data) {
    const msg = data.val();
    const key = data.key;
    let h = "<p data-timestamp='" + msg.timestamp + "'>"; // 送信日時を属性として保存
    h += msg.uname;
    h += "<br>";
    h += msg.text;
    h += "</p>";
    $("#output").append(h);
  });

// メッセージを表示する際に、その送信日時をHTML要素の属性として保存
onChildAdded(dbRef, function (data) {
    const msg = data.val();
    const key = data.key;
    let h = "<p data-timestamp='" + msg.timestamp + "'>"; // 送信日時を属性として保存
    h += msg.uname;
    h += "<br>";
    h += msg.text;
    h += "</p>";
    $("#output").append(h);
  });