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

// Streak reminders (Web Push). The payload is {title, body, url, tag}; anything malformed still shows a safe default.
self.addEventListener('push', event => {
  let data = {};
  try { data = event.data ? event.data.json() : {}; } catch { /* use defaults */ }
  const title = typeof data.title === 'string' && data.title ? data.title.slice(0, 80) : 'ExamSathi';
  const body = typeof data.body === 'string' ? data.body.slice(0, 160) : '';
  const url = typeof data.url === 'string' ? data.url : '/dashboard/';
  event.waitUntil(self.registration.showNotification(title, {
    body,
    tag: typeof data.tag === 'string' ? data.tag : 'examsathi',
    icon: new URL('icons/icon-192.png', root).href,
    badge: new URL('icons/icon-192.png', root).href,
    data: { url },
  }));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  // Only ever open a page of this site, inside this app's scope.
  const requested = event.notification.data && event.notification.data.url;
  let target = new URL('dashboard/', root);
  try {
    const candidate = new URL(String(requested).replace(/^\//, ''), root);
    if (candidate.origin === root.origin && candidate.pathname.startsWith(root.pathname)) target = candidate;
  } catch { /* keep the default */ }
  event.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(windows => {
    const open = windows.find(w => w.url.startsWith(root.origin));
    return open ? open.focus().then(w => w.navigate(target.href)) : self.clients.openWindow(target.href);
  }));
});
