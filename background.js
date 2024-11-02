// Listen for keyboard shortcut or extension icon click
chrome.action.onClicked.addListener((tab) => {
    // Send message to current tab to toggle overlay
    chrome.tabs.sendMessage(tab.id, {action: 'toggleOverlay'});
});