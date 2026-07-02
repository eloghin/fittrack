const CACHE = 'fittrack-v1';
const FILES = ['./FitTrack.html','./manifest.json'];
self.addEventListener('install', e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener('fetch', e => {
  if(e.request.url.includes('todoist.com')) return;
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
