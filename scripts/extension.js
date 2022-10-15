document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('toggleFocusMode');
    button.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            // alert("hi link")
            chrome.tabs.sendMessage(tabs[0].id, { data:"removeAds"}, function (response) {
            });
        });
    });
});





