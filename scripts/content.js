var isFocusModeOn = false;
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (!isFocusModeOn) {
        $("body").append($("<div>").addClass("overlay-top"));
        $("body").append($("<div>").addClass("overlay-bottom"));
        setEventListeners();
        isFocusModeOn = true;
    }
    else {
        $(document).unbind("mousemove")
        $(".overlay-top").remove();
        $(".overlay-bottom").remove()
        isFocusModeOn = false;
    }
});
function setEventListeners() {
    $(".overlay-top").css("height", "100px");
    setOverlayBottomHeight()
    $(document).mousemove(function (e) {
        getMousePositionAndSetOverlay(e)
    })

}
function getMousePositionAndSetOverlay(e) {
    var Y = e.pageY - $(window).scrollTop();
    transparentPortionHeight = getTransparentPortionHeight();
    $(".overlay-top").css("height", Y - transparentPortionHeight / 2);
    setOverlayBottomHeight()
}
function getOverlayTopHeight() {
    var overlayTopHeight = $(".overlay-top").css("height");
    overlayTopHeight = overlayTopHeight.replace("px", "");
    return overlayTopHeight;
}
function getTransparentPortionHeight() {
    return 100;
}
function getViewPortHeight() {
    return window.innerHeight
}
function setOverlayBottomHeight() {
    var bottomHeight = getViewPortHeight() - getOverlayTopHeight() - getTransparentPortionHeight();
    $(".overlay-bottom").css("height", bottomHeight);
}
