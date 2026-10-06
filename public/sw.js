// ExamSathi Service Worker — Offline Support
// Caches lesson pages, assets and fonts for offline use

const CACHE_NAME = 'examsathi-v1';
const OFFLINE_URL = '/offline';

// Core pages to pre-cache
const PRECACHE_URLS = [
  '/',
  '/dashboard',
  '/exams',
  '/mock-test',
  '/roadmap',
  '/library',
  '/typing-practice',
  '/about',
  '/offline',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_URLS).catch(() => {
        // If pre-cache fails (offline install), continue anyway
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and chrome-extension requests
  if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension')) {
    return;
  }

  // Skip Supabase API requests (always need network)
  if (event.request.url.includes('supabase.co')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Serve from cache, then update cache in background
        fetch(event.request)
          .then((response) => {
            if (response && response.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, response.clone());
              });
            }
          })
          .catch(() => {}); // Ignore network errors for background update
        return cachedResponse;
      }

      // Not in cache — fetch from network
      return fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          // Cache successful responses
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => {
          // Offline fallback
          if (event.request.mode === 'navigate') {
            return caches.match(OFFLINE_URL) || caches.match('/dashboard');
          }
          return new Response('Offline', { status: 503 });
        });
    })
  );
});
