const cacheName = 'tcwr-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/TCWRMEMORY.html',
  '/Sidebetwheel.html',
  '/underconstruction.html',
  '/style.css',
  '/1.JPG',
  '/10.jpg',
  '/11.jpg',
  '/12.jpg',
  '/13.jpg',
  '/14.jpg',
  '/15.png',
  '/16.png',
  '/17.JPG',
  '/19.JPG',
  '/2.JPG',
  '/20.JPG',
  '/3.JPG',
  '/5.JPG',
  '/6.JPG',
  '/7.JPG',
  '/9.JPG',
  '/Brody.JPG',
  '/kenny2.jpg',
  '/logo.jpeg',
  '/clock.mp3',
  '/gameover.m4a',
  '/nfltheme.m4a',
  '/playagame.mp3',
  '/prizewheel.mp3',
  '/touchdown.m4a',
  '/warning.mp3',
  '/tcwr-192.png',
  '/tcwr-512.png',
  'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(filesToCache);
    }).catch((error) => {
      console.error('Failed to cache resources:', error);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
