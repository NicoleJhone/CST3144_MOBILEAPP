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
