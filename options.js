/* var key ="test" */

// Get string in the localStorage and convert to JSON
var getObject = function() {
    chrome.storage.sync.get("url",function(item){
// 	    console.log(item);
	    return item;});
};

// Convert JSON to String and save it to localStorage
var setObject = function(obj) {
/* 	chrome.storage.sync.clear(function(){});//データ削除 */
	chrome.storage.sync.set({"url": obj},function(){
		console.log("Data saved");
		console.log({"url": obj})});
};

// Show data of localStorage
var showStorage = function() {
	chrome.storage.sync.get("url", function(item){
		console.log(item.url);
		$('#targetURL').val(item.url);
		});
};

$(function(){
    $('#save').click(function() {
	    var textArea = $('#targetURL');
		var url = textArea.val();

// 		Get object from localStrage
        var obj = getObject();
        if (!obj) {
            obj = new Object();
        }
//         Data
        obj = url;
        setObject(obj);
        showStorage();
        alert("Update OK");
    });
/*     オプションデータの表示 */
    showStorage();
});