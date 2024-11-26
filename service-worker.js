var cacheName = "petstore-v1";
var cacheFiles = [
  "index.html",
  "products.js",
  "petstore.webmanifest",
  "images/product-fullsize.png",
  "images/yarn.png",
  "images/bobbyfright.jpg",
  "images/fish.jpg",
  "images/paw.jpeg",
];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("[Service Worker] Caching all the files");
      return cache.addAll(cacheFiles);
    })
  );
});

self.addEventListener('fetch', (e) => { 
  console.log('[Service Worker] Fetched resource '+e.request.url); 
  }); 
  
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (r) {
      // download the file if it is not in the cache
      return (
        r ||
        fetch.apply(e.request).then(function (response) {
          // add the new file to cache
          return caches.open(cacheName).then(function (cache) {
            cache.put(e.request, response.clone());
            return response;
          });
        })
      );
    })
  );
});


