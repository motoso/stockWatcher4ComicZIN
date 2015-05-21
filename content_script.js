chrome.runtime.sendMessage({method: "getLocalStorage", key: "url"}, function(response) {
  console.log(response.data);
});