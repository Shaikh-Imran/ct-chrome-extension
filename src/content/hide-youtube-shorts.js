// YouTube Shorts handling
(function () {
  // Redirect YouTube Shorts to regular video page (only if enabled)
  const currentUrl = window.location.href;
  if (currentUrl.includes("youtube.com/shorts")) {
    chrome.storage.local.get("ytShortToVideo", (data) => {
      if (data.ytShortToVideo) {
        const newUrl = currentUrl.replace("/shorts/", "/watch?v=");
        console.log("Redirecting from Shorts to:", newUrl);
        window.location.replace(newUrl);
      }
    });
  }

  // Show alert on successful YouTube page load
  if (window.location.hostname.includes("youtube.com")) {
    window.addEventListener("DOMContentLoaded", () => {
      alert("YouTube page loaded successfully!");
    });
  }
})();
