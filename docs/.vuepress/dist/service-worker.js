/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "582a01b059b2b41d27e93a910aa551cf"
  },
  {
    "url": "assets/css/0.styles.6fe5ae40.css",
    "revision": "c5a2fc319e41de8890c24d85a814e232"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c3e2721f.js",
    "revision": "ee11b2e8561d91c5e967fedd8dcd9916"
  },
  {
    "url": "assets/js/11.050e808e.js",
    "revision": "92fcd3b721f146935db61a1220d3c1ea"
  },
  {
    "url": "assets/js/12.579cf6e0.js",
    "revision": "7d30400fc434de7d347473bf6f198963"
  },
  {
    "url": "assets/js/13.9d5805aa.js",
    "revision": "9e95af955f5285102947acb3f10968c7"
  },
  {
    "url": "assets/js/14.86930545.js",
    "revision": "60a79f36f39e00c38f6caf17a4634b3f"
  },
  {
    "url": "assets/js/15.570d0038.js",
    "revision": "1ff45afde7fd29e0ecd8f6703021900d"
  },
  {
    "url": "assets/js/16.1e1daf97.js",
    "revision": "4c27e19cb6fe98726d2c4fa1aa3c9d7e"
  },
  {
    "url": "assets/js/17.97ec6e2a.js",
    "revision": "ac29f8a79be5ef2725374249e8429360"
  },
  {
    "url": "assets/js/18.bdc2c75b.js",
    "revision": "788d2322df3b1eb464f93da9f91bb6e2"
  },
  {
    "url": "assets/js/4.eb217dfe.js",
    "revision": "761eb26974a65c73e952e0f6dc414d88"
  },
  {
    "url": "assets/js/5.843efa97.js",
    "revision": "112f3d0fe84e5398bfaec74c95848cc6"
  },
  {
    "url": "assets/js/6.751994f5.js",
    "revision": "ee80c1fdc67e268105263d4e33317249"
  },
  {
    "url": "assets/js/7.db60fb18.js",
    "revision": "c8ba0fa1cf783c6930a45f93283fb656"
  },
  {
    "url": "assets/js/8.7c641d1b.js",
    "revision": "9a4ca4c4a404adc7641df134acdf2579"
  },
  {
    "url": "assets/js/9.a67fcdd8.js",
    "revision": "b541f61a76627ad92f6cd361a5c7d6ec"
  },
  {
    "url": "assets/js/app.7ec115d6.js",
    "revision": "b6f312b2ba01ab292ccd7ae06f868ee3"
  },
  {
    "url": "assets/js/vendors~flowchart.b9181f71.js",
    "revision": "58366ddfdebe4c809db26479d17c0d39"
  },
  {
    "url": "assets/js/vendors~notification.8ec48a6d.js",
    "revision": "8c5292ddd31a027ce1a72eef945787f5"
  },
  {
    "url": "index.html",
    "revision": "96318f8d0557d5242f1aea67379b9162"
  },
  {
    "url": "webpack/getting-started.html",
    "revision": "04d3f24a239bbd56334e8467ac00e41b"
  },
  {
    "url": "webpack/index.html",
    "revision": "482bfc07d450118ee0a44ba476f19c77"
  },
  {
    "url": "webpack/plugins.html",
    "revision": "b0338f6d54a465b499bcebe8d432e538"
  },
  {
    "url": "zh/index.html",
    "revision": "da5b71b91509384d2f638aeae9fe0ef7"
  },
  {
    "url": "zh/webpack/getting-started.html",
    "revision": "d91d702790c4fc6710361e3be4cd5160"
  },
  {
    "url": "zh/webpack/index.html",
    "revision": "e2180d05308ff75ced2a59db95af4bd2"
  },
  {
    "url": "zh/webpack/plugins.html",
    "revision": "a8176b101126c10084a75c5abb8b6652"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
