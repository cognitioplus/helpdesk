// script.js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
        // Handle PWA install prompt
        let installPrompt = null;

        window.addEventListener('beforeinstallprompt', (e) => {
          e.preventDefault();
          installPrompt = e;
          document.getElementById('install-button').style.display = 'block';
        });

        document.getElementById('install-button').addEventListener('click', () => {
          if (installPrompt) {
            installPrompt.prompt();
            installPrompt.userChoice.then((choiceResult) => {
              if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
              } else {
                console.log('User dismissed the install prompt');
              }
              installPrompt = null;
              document.getElementById('install-button').style.display = 'none';
            });
          }
        });
      })
      .catch((err) => {
        console.error('Service Worker registration failed:', err);
      });
  });
}
