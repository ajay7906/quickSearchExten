document.getElementById('toggleOverlay').addEventListener('click', () => {
    // Send message to active tab to toggle overlay
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {action: 'toggleOverlay'});
        
        // Close the popup after sending message
        window.close();
    });
});





// <script async src="https://cse.google.com/cse.js?cx=66b2d40860d1a4ab1">
// </script>
// <div class="gcse-search"></div>