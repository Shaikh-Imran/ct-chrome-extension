(function () {
    redirectShorts();
})();

function redirectShorts() {
    if (window.location.href.indexOf("youtube.com/shorts") > -1) {
        chrome.storage.local.get("yt-short-to-video", (data) => {
            if (data['yt-short-to-video']) {
                window.location.replace(
                    window.location.toString().replace("/shorts/", "/watch?v="),
                );
            }
        });
    }
}

window.onload = function () {
    redirectShorts();
    var bodyList = document.querySelector("body");
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach((_mutation) => {
            redirectShorts();
        });
    });
    var config = {
        childList: true,
        subtree: true,
    };
    observer.observe(bodyList, config);
};

