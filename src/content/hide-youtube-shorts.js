(function () {
  redirectShorts();
})();

function hideShorts() {
  chrome.storage.local.get('yt-hide-shorts', (data) => {
    if (!data['yt-hide-shorts']) return;

    [
      "ytd-playlist-thumbnail", // mixed item
      "ytd-reel-shelf-renderer", // reel section
      "ytd-rich-section-renderer", // Trending
      // "ytd-rich-grid-renderer" // shorts
      // "ytd-shelf-renderer", // top news in search
    ].forEach((q) => document.querySelectorAll(q).forEach((e) => e.style.display = 'none'));
  });
}

function redirectShorts() {
  if (window.location.href.indexOf('youtube.com/shorts') > -1) {
    chrome.storage.local.get('yt-short-to-video', (data) => {
      if (!data['yt-short-to-video']) return;
      window.location.replace(window.location.toString().replace('/shorts/', '/watch?v='));
    });
  }
}

window.onload = function () {
  redirectShorts();
  hideShorts();
  var bodyList = document.querySelector('body');
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach((_mutation) => {
      redirectShorts();
      hideShorts();
    });
  });
  var config = {
    childList: true,
    subtree: true,
  };
  observer.observe(bodyList, config);
};
