console.log('started ServiceWorker');

var currentCacheName = 'looklive-1.1';

var urlsToCache = [
    '/styles/style.css',
    '/images/header.jpg',
    '/images/logo.png',
    '/lib/routie.js',
    '/js/app.js',
    'sw.js',
    'api/feed'
]

this.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('looklive-1.0').then(function (cache) {
            return cache.addAll(urlsToCache);
        })
    );

    this.addEventListener('fetch', function(event) {
      event.respondWith(
          caches.match(event.request)
              .then(function(response) {
                  if(response) {
                      console.log('found cached response', response);
                      return response;
                  } else {
                      return fetchAndCache(event);
                  }
              })
      );
    });

});

function fetchAndCache(event) {
    return fetch(event.request).then(function(response) {
        return caches.open('looklive-images-1.0').then(function(cache) {
            console.log('fetched and caching', event.request);
            cache.put(event.request, response.clone());
            return response;
        });
    });
}