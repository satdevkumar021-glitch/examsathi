const CACHE = 'examsathi-public-v3';
const root = new URL('./', self.location.href);
const offline = new URL('offline.html', root).href;
const publicPages = [offline];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(publicPages)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys
    .filter(key => key.startsWith('examsathi-') && key !== CACHE)
    .map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== root.origin ||
      !url.pathname.startsWith(root.pathname) ||
      /\/(api|auth|login|register|forgot-password|admin)\//.test(url.pathname)) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).catch(() => caches.match(offline)));
  } else if (/\/_next\/static\//.test(url.pathname) || /\/icons\//.test(url.pathname)) {
    event.respondWith(caches.match(event.request).then(cached => cached ||
      fetch(event.request).then(response => {
        if (response.ok) {
          const copy = response.clone();
          event.waitUntil(caches.open(CACHE).then(cache => cache.put(event.request, copy)));
        }
        return response;
      })));
  }
});
