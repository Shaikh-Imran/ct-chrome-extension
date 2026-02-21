(function () {
  redirectShorts();
  hideShorts();
})();

function hideShorts() {
  chrome.storage.local.get('yt-hide-shorts', (data) => {
    if (!data['yt-hide-shorts']) return;

    // Selectors for Shorts elements on YouTube
    const selectors = [
      'ytd-rich-shelf-renderer[is-shorts]', // Shorts shelf on home
      'ytd-reel-shelf-renderer', // Shorts reel shelf
      'ytd-mini-guide-entry-renderer a[title="Shorts"]', // Shorts in mini sidebar
      'ytd-guide-entry-renderer a[title="Shorts"]', // Shorts in full sidebar
    ];

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        const target = el.closest(
          'ytd-rich-shelf-renderer, ytd-reel-shelf-renderer, ytd-mini-guide-entry-renderer, ytd-guide-entry-renderer',
        );
        if (target) target.style.display = 'none';
      });
    });
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
