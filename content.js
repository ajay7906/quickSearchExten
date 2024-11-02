(function() {
    let overlayFrame = null;

    // Function to create the overlay iframe
    function createOverlay() {
        // Check if overlay already exists
        if (document.getElementById('quick-search-overlay')) return;

        // Create iframe for the overlay
        overlayFrame = document.createElement('iframe');
        overlayFrame.id = 'quick-search-overlay';
        overlayFrame.src = chrome.runtime.getURL('overlay.html');
        
        // Styling for the overlay
        overlayFrame.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 380px;
            height: 550px;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            z-index: 10000;
            background: white;
            display: none;
            overflow: hidden;
            transition: all 0.3s ease;
        `;

        document.body.appendChild(overlayFrame);
    }

    // Toggle overlay visibility
    function toggleOverlay() {
        // Create overlay if not exists
        if (!overlayFrame) {
            createOverlay();
        }
        
        // Toggle display
        if (overlayFrame.style.display === 'none' || overlayFrame.style.display === '') {
            overlayFrame.style.display = 'block';
            overlayFrame.style.transform = 'scale(1)';
            overlayFrame.style.opacity = '1';
        } else {
            overlayFrame.style.display = 'none';
            overlayFrame.style.transform = 'scale(0.9)';
            overlayFrame.style.opacity = '0';
        }
    }

    // Listen for messages to toggle overlay
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === 'toggleOverlay') {
            toggleOverlay();
        }
    });
})();