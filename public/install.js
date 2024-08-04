let deferredPrompt;

// Show the install button and modal on first load
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // Prevent the default install prompt
    deferredPrompt = event;
    document.getElementById('installButton').classList.remove('hidden');
});

// Handle the install button click
document.getElementById('installButton').addEventListener('click', () => {
    // Hide the install button
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
        document.getElementById('installButton').classList.add('hidden');
    }
});

