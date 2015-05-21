$(function(){
	// Settings
	// timespan
	var delay_seconds = 3600; 

	// target url
/*
	var targetUrls = ["http://shop.comiczin.jp/products/detail.php?product_id=24245",
	"http://shop.comiczin.jp/products/detail.php?product_id=24306",
	"http://shop.comiczin.jp/products/detail.php?product_id=23048"];
*/
	var targetUrls = [];

	// AJAX Object
// 	var previous_post_time = 0;
	var XMLHttpRequest_STATE_COMPLETE = 4;
	var idx = 0;

	function initialize() {
	// first check
// 		console.log(localStorage.key[0]);
		check_update();
	}

	function check_update() {

	chrome.storage.sync.get("url",
		function(items){
		console.log("GET!!");
		console.log(items);
		targetUrls = items.url.split('\n');
		for(var i=0; i < targetUrls.length; i++){
			console.log("URL" + targetUrls[i]);
		}
	});

		if(targetUrls.length !== 0){
			sendRequest();
		}
		// next check
		setTimeout(check_update, 1000 * delay_seconds);
	}

	function sendRequest(){
		for(var i = 0; i < targetUrls.length; i++){
/*
			if(target_url[i] == undefined){
				return;
			}
*/
			simple_GET(targetUrls[i]);
		}
	}

	/* 	通信の数だけXMLHttpRequest()を生成 */
	function simple_GET(path){
		var result = $.get(path,function(response){
// 			console.log($(response));//めっちゃエラー吐く
			var parser = new DOMParser();
			var doc = parser.parseFromString(response, "text/html");
			$img = $(doc).find('.fnt_pos_right img').attr('alt');
// 			console.log($img);
		 	 if($img == undefined){ //img要素がなければ購入可能
			 	 var $productName = $(doc).find('.fw_main_block_header_type2').text();
			 	 notify($productName);
			 }
	 	});
	 }

	function notify(name) {
		var opt = {
		  type: "basic",
		  title: "Stock Wathcher for COMIC ZIN",
		  message: "「 " + name + " 」が購入可能になりました",
		  iconUrl: "icon128.png"
		}
		chrome.notifications.create(name, opt);
	}

	initialize();

});
