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
