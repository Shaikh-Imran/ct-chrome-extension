// --- YT short to Video toggle ---
const ytShortCheckbox = document.getElementById('yt-short-to-video');

// Load saved state
chrome.storage.local.get('yt-short-to-video', (data) => {
  ytShortCheckbox.checked = !!data['yt-short-to-video'];
});

// Persist on change
ytShortCheckbox.addEventListener('change', () => {
  chrome.storage.local.set({ 'yt-short-to-video': ytShortCheckbox.checked });
});

// --- Hide YT Shorts toggle ---
const ytHideShortsCheckbox = document.getElementById('yt-hide-shorts');

// Load saved state
chrome.storage.local.get('yt-hide-shorts', (data) => {
  ytHideShortsCheckbox.checked = !!data['yt-hide-shorts'];
});

// Persist on change
ytHideShortsCheckbox.addEventListener('change', () => {
  chrome.storage.local.set({ 'yt-hide-shorts': ytHideShortsCheckbox.checked });
});
