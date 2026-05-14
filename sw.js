const CACHE_NAME = 'hermes-chat-v2';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.conversejs.org/10.1.5/css/converse.min.css',
  'https://cdn.conversejs.org/10.1.5/dist/converse.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
