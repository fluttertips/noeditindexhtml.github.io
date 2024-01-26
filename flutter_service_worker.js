'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "90933f62aea6d50b77b3c8d78587e292",
"assets/AssetManifest.bin.json": "ba87d4aae5395868c8a6532c2f9f3250",
"assets/AssetManifest.json": "42b66ff2d10288f2d07a568c7f11f50b",
"assets/assets/Images/project-3-s1.jpg": "6837fee4fb018b2676a66f5432e3a520",
"assets/assets/Images/project-3-s2.jpg": "f9218801ea00a14f084ff2ca5d944ab4",
"assets/assets/Images/project-3-s3.jpg": "94dd4f8bb8ce1d13763a452bf48f0b32",
"assets/assets/Images/project-3-s4.jpg": "9803f54e70ad01b7cd9f00ba7f00cc08",
"assets/assets/Images/project-3-s5.jpg": "452e8b2d8bb63899b5732d2c23b41dd7",
"assets/assets/Images/project-4-s1.jpg": "b287b174486728e6c88574d3b36a1407",
"assets/assets/Images/project-4-s2.jpg": "9de7ed44f7e6428c894d69e4ef078ee9",
"assets/assets/Images/project-4-s3.jpg": "5b76b7d37108197ffb0b5304558e6609",
"assets/assets/Images/project-4-s4.jpg": "c48ba7212e17a20210a910395570fd40",
"assets/assets/Images/project-5-s1.jpg": "b5160b48cb4aa71e79cd6375c5b111ad",
"assets/assets/Images/project-5-s2.jpg": "bb86c0bb6f0dbdf5001cd8c88b9f4559",
"assets/assets/Images/project-5-s3.jpg": "01726fd4169196e2c529fb2c6b618325",
"assets/assets/Images/project-5-s4.jpg": "fffa2887892cea994331f2c9a0cc344a",
"assets/assets/Images/project-5-s5.jpg": "c08578219c444daed611656deaca1e97",
"assets/assets/Images/project-6-s1.png": "dcf57ab143cd881897e4eb6e1a06aca4",
"assets/assets/Images/project-6-s10.png": "0cd231a9b50f9f1f6f272124009f514d",
"assets/assets/Images/project-6-s11.png": "f1d1cc3824ac8b9a067474faaf27041f",
"assets/assets/Images/project-6-s12.png": "8f0a6bb5689e6016a64a39b20b1b6faf",
"assets/assets/Images/project-6-s2.png": "eac06fc7b2fe27d239afac39390fdb1b",
"assets/assets/Images/project-6-s3.png": "d0aca7bf9d9c4da8645c0993ef6997db",
"assets/assets/Images/project-6-s4.png": "01e7afce413f22d4ec9aa9a16bbf9af2",
"assets/assets/Images/project-6-s5.png": "5385ef320f257402da8f74184cb6e7fb",
"assets/assets/Images/project-6-s6.png": "9f72d9f1f32ab97fd7f8589371b33a29",
"assets/assets/Images/project-6-s7.png": "06e6fe8f8788ba7b1168eb665d821f55",
"assets/assets/Images/project-6-s8.png": "c30cde76d1cd2bf6a9455143bf97e386",
"assets/assets/Images/project-6-s9.png": "5768b20cf9ee957546968f4a735be311",
"assets/assets/Images/project-five.png": "20327b702f223256bf25bc034131ed4b",
"assets/assets/Images/project-four.jpg": "d8ad8f6b292ba921075e3c160de0cd70",
"assets/assets/Images/project-one-model-images.png": "02c22785b6bec05420245b90607d80c0",
"assets/assets/Images/project-one-s1.jpg": "81f4e09c3e117b1c0674c8afff6cd1d9",
"assets/assets/Images/project-one-s2.jpg": "3ff549451794f5b861695c0f1e913c3c",
"assets/assets/Images/project-one-s3.jpg": "10e162e2f4e3aa312d505d084289e6c4",
"assets/assets/Images/project-one-s4.jpg": "e092e8d78998edcd3dfadb95480b4021",
"assets/assets/Images/project-one-s5.jpg": "15539a5ec8b4d0085f87410f7ed16ae3",
"assets/assets/Images/project-one.png": "92c26b596d40f55925b85be07da6d16d",
"assets/assets/Images/project-three.png": "cc2a092c7f6e968fa1a91d100b8bcf00",
"assets/assets/Images/project-two-model-images.png": "5bc9181e8037fd3e965771d7a43f8858",
"assets/assets/Images/project-two-s1.png": "5bc9181e8037fd3e965771d7a43f8858",
"assets/assets/Images/project-two-s2.jpg": "aab2b9646936b7c9e778d31b2a7a07c7",
"assets/assets/Images/project-two.png": "8550322bae3c6d85ca8584687cbe2334",
"assets/assets/project.json": "6bea0bc21f4042df0f7928031bcf489f",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "3d4edc52fff9739d17c034e25bbc8c4e",
"assets/NOTICES": "444c32e5480b6cab52b73b1bf192bdf4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "02ce390d09e3c7c411dfeff9b2810f60",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "3d8e979002071c8c44bc6b4842ca8f07",
"/": "3d8e979002071c8c44bc6b4842ca8f07",
"main.dart.js": "2103b99b0701c6df5a3ed5ca6d1fb59b",
"manifest.json": "5a3353c22a52588a66262b80ae2877cd",
"version.json": "db88922979c8ed533a7fa8aac5fef0f0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
