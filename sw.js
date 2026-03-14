/* ── Service Worker – The Thinker's Daily Quote ──────────────── */
// Cache version: bump this whenever the app assets change to force
// all clients to get the new files.  Starts at v2 (v1 was the initial release).
const CACHE_NAME = 'thinker-quote-v2';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500&display=swap'
];

/* ── Install: pre-cache all static assets ────────────────────── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

/* ── Activate: clean up old caches ───────────────────────────── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys =>
        Promise.all(
          keys
            .filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

/* ── Fetch: cache-first strategy for offline use ─────────────── */
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => {
        if (cached) {
          return cached;
        }
        return fetch(event.request)
          .then(response => {
            // Only cache successful same-origin or CORS responses.
            // Skip opaque responses (cross-origin without CORS headers)
            // as they mask errors and waste cache space.
            if (
              !response ||
              response.status !== 200 ||
              (response.type !== 'basic' && response.type !== 'cors')
            ) {
              return response;
            }
            const responseClone = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => cache.put(event.request, responseClone));
            return response;
          })
          .catch(() => {
            // Network failed and no cache – return nothing gracefully
            return new Response('Offline - no cached version available.', {
              status: 503,
              headers: { 'Content-Type': 'text/plain' }
            });
          });
      })
  );
});
