// YouTube Shorts handling
(function () {
  // Redirect YouTube Shorts to regular video page (only if enabled)
  const currentUrl = window.location.href;
  if (currentUrl.includes("youtube.com/shorts")) {
    chrome.storage.local.get("yt-short-to-video", (data) => {
      if (data['yt-short-to-video']) {
        const newUrl = currentUrl.replace("/shorts/", "/watch?v=");
        console.log("Redirecting from Shorts to:", newUrl);
        window.location.replace(newUrl);
      }
    });
  }
})();
