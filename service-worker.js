const CACHE_NAME = 'tcwr-games-v2'; 

const urlsToCache = [
 
  './',
  'index.html',
  'manifest.json',
  'service-worker.js',
  'TCWRMEMORY.html',
  'Sidebetwheel.html',
  'underconstruction.html',
  'style.css',
  '1.JPG',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.png',
  '16.png',
  '17.JPG',
  '19.JPG',
  '2.JPG',
  '20.JPG',
  '3.JPG',
  '5.JPG',
  '6.JPG',
  '7.JPG',
  '9.JPG',
  'Brody.JPG',
  'kenny2.jpg',
  'logo.jpeg',
  'clock.mp3',
  'gameover.m4a',
  'nfltheme.m4a',
  'playagame.mp3',
  'prizewheel.mp3',
  'touchdown.m4a',
  'warning.mp3',
  'tcwr-192.png',
  'tcwr-512.png'
];

self.addEventListener('install', (event) => {
  console.log('[Service Worker] Install event received, beginning caching.');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
      .then(() => self.skipWaiting()) 
      .catch((error) => {
        console.error('[Service Worker] Failed to cache resources:', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  console.log('[Service Worker] Activate event received, cleaning up old caches.');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log(`[Service Worker] Deleting old cache: ${cacheName}`);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
