chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  try {
    const url = new URL(details.url);

    // Only act on main frame navigation
    if (details.frameId !== 0) return;

    // Check if it's a Shorts URL
    if (url.pathname.startsWith('/shorts/')) {
      chrome.storage.local.get('yt-short-to-video', (data) => {
        if (!data['yt-short-to-video']) return;
        const videoId = url.pathname.split('/shorts/')[1];

        if (!videoId) return;

        const newUrl = `https://www.youtube.com/watch?v=${videoId}`;

        chrome.tabs.update(details.tabId, { url: newUrl });
      });
    }
  } catch (e) {
    console.error(e);
  }
});
