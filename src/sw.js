self.addEventListener('install', function (event) {
    console.log("Service Worker Installed");
    event.waitUntil(caches.open('static')
        .then(function (cache) {
            cache.addAll([
                '/',
                '/index.html',
                '/assets/images',
                '/assets/icons'
            ]);
        }))

});
self.addEventListener('activate', function () {
    console.log("Service Worker Activate");
})