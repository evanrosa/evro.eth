if (!self.define) {
  let e,
    c = {};
  const i = (i, s) => (
    (i = new URL(i + '.js', s).href),
    c[i] ||
      new Promise((c) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = i), (e.onload = c), document.head.appendChild(e);
        } else (e = i), importScripts(i), c();
      }).then(() => {
        let e = c[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (s, a) => {
    const n =
      e ||
      ('document' in self ? document.currentScript.src : '') ||
      location.href;
    if (c[n]) return;
    let t = {};
    const r = (e) => i(e, n),
      f = { module: { uri: n }, exports: t, require: r };
    c[n] = Promise.all(s.map((e) => f[e] || r(e))).then((e) => (a(...e), t));
  };
}
define(['./workbox-6a1bf588'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/25hb5ZSXd5XHHJ7X0MF7O/_buildManifest.js',
          revision: '9c856e356f55aea1306f803d11c11e90',
        },
        {
          url: '/_next/static/25hb5ZSXd5XHHJ7X0MF7O/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        {
          url: '/_next/static/chunks/237.1ea3d64bb12baf39.js',
          revision: '1ea3d64bb12baf39',
        },
        {
          url: '/_next/static/chunks/322-cfe034aea407edc7.js',
          revision: 'cfe034aea407edc7',
        },
        {
          url: '/_next/static/chunks/356.eb0d8e0c41b65fb1.js',
          revision: 'eb0d8e0c41b65fb1',
        },
        {
          url: '/_next/static/chunks/462.09e2ddcf090ed169.js',
          revision: '09e2ddcf090ed169',
        },
        {
          url: '/_next/static/chunks/592.6697e564089e995d.js',
          revision: '6697e564089e995d',
        },
        {
          url: '/_next/static/chunks/690-c306187bc8a2e0ec.js',
          revision: 'c306187bc8a2e0ec',
        },
        {
          url: '/_next/static/chunks/730.95988673baf31045.js',
          revision: '95988673baf31045',
        },
        {
          url: '/_next/static/chunks/736.8081b7fdecac4929.js',
          revision: '8081b7fdecac4929',
        },
        {
          url: '/_next/static/chunks/894.3eacf5f4ecd42b61.js',
          revision: '3eacf5f4ecd42b61',
        },
        {
          url: '/_next/static/chunks/984.2267c0a3862ff289.js',
          revision: '2267c0a3862ff289',
        },
        {
          url: '/_next/static/chunks/framework-d276e04cdae2f6da.js',
          revision: 'd276e04cdae2f6da',
        },
        {
          url: '/_next/static/chunks/main-68563ab90f81e3a2.js',
          revision: '68563ab90f81e3a2',
        },
        {
          url: '/_next/static/chunks/pages/404-af8ed610fc217211.js',
          revision: 'af8ed610fc217211',
        },
        {
          url: '/_next/static/chunks/pages/500-1110f64d040c15c2.js',
          revision: '1110f64d040c15c2',
        },
        {
          url: '/_next/static/chunks/pages/_app-4d222a56e7f36bfd.js',
          revision: '4d222a56e7f36bfd',
        },
        {
          url: '/_next/static/chunks/pages/_error-fb68742d3cf986b6.js',
          revision: 'fb68742d3cf986b6',
        },
        {
          url: '/_next/static/chunks/pages/index-60ff4ba06507e94d.js',
          revision: '60ff4ba06507e94d',
        },
        {
          url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
          revision: '837c0df77fd5009c9e46d446188ecfd0',
        },
        {
          url: '/_next/static/chunks/webpack-92b91a4c225fb4fb.js',
          revision: '92b91a4c225fb4fb',
        },
        {
          url: '/_next/static/css/64e07df09b4fb7a6.css',
          revision: '64e07df09b4fb7a6',
        },
        {
          url: '/_next/static/css/ae4ed9c503fd1e33.css',
          revision: 'ae4ed9c503fd1e33',
        },
        {
          url: '/_next/static/media/clayfriend.14d1b4cc.webp',
          revision: '1e081cd39b50d9d48088df115d7633c9',
        },
        {
          url: '/_next/static/media/illogic151.266802c9.webp',
          revision: '470701fa7e6f89a27187cc2d16041bd2',
        },
        {
          url: '/_next/static/media/illogic1600.bbb0bafa.webp',
          revision: '1c5de71d67089b31b3c1b2eac1a75cab',
        },
        {
          url: '/_next/static/media/illogic2768.f24c19b6.webp',
          revision: 'd63404028b3174188ec3245ebeabb3ee',
        },
        {
          url: '/_next/static/media/illogic4739.326872b1.webp',
          revision: 'a2890e29b717c605402ee07382d49a75',
        },
        {
          url: '/_next/static/media/illogic4946.6df6b556.webp',
          revision: '42f6531bc0306ebf4e43dc831362e7c1',
        },
        {
          url: '/_next/static/media/illogic6255.88ab6f28.webp',
          revision: 'f30e223385bb811e6b8a19c1cae26bdf',
        },
        {
          url: '/_next/static/media/illogic7298.b8d0b92c.webp',
          revision: '51580fbe21eff99549d49abf1fcf2325',
        },
        {
          url: '/_next/static/media/illogic8273.c739cd24.webp',
          revision: 'bb13dcb4c7ed70dac9f831a0355201f5',
        },
        {
          url: '/_next/static/media/loser-club-catman.67781b0f.webp',
          revision: '5dd30f740fc02b23f04fd29afc0a054c',
        },
        {
          url: '/_next/static/media/loser-club-eth-eyes.ec81f982.webp',
          revision: '4c952a79677ba1e307dc675c7dd4e564',
        },
        {
          url: '/_next/static/media/tiny-astro1347.af7afe00.webp',
          revision: 'd3f0890d91ea7c664f627d7b20e61473',
        },
        {
          url: '/_next/static/media/tiny-astro219.c9b34365.webp',
          revision: '4313cbf006816adac694d638cce1d4ab',
        },
        {
          url: '/android-chrome-192x192.png',
          revision: 'c4be43f183a10f9b0d286528aa2d3cce',
        },
        {
          url: '/android-chrome-512x512.png',
          revision: '21c6d8665f4cb909b8578a52edd153bc',
        },
        {
          url: '/apple-touch-icon.png',
          revision: '50e56cf2902b33661004510a7096b48c',
        },
        {
          url: '/favicon-16x16.png',
          revision: '37fd26e5728c5a9a2923418de2b75dbb',
        },
        {
          url: '/favicon-32x32.png',
          revision: 'c047726300efbcb5db1d41d443060d70',
        },
        {
          url: '/favicon.ico',
          revision: 'b8e3d81e2fa04c5f426c77c282e8e874',
        },
        {
          url: '/manifest.json',
          revision: '2a0f4cd16331ba5358838b70c14419f7',
        },
        {
          url: '/nfts/clayfriend.png',
          revision: '7511adb5a855b9ca894d66bb45761940',
        },
        {
          url: '/nfts/clayfriend.webp',
          revision: '1e081cd39b50d9d48088df115d7633c9',
        },
        {
          url: '/nfts/illogic151.png',
          revision: '1a7ad067c8ae43be8de24d8076e1cffc',
        },
        {
          url: '/nfts/illogic151.webp',
          revision: '470701fa7e6f89a27187cc2d16041bd2',
        },
        {
          url: '/nfts/illogic1600.png',
          revision: '345ac5fef731f389d30a43c1b684bc0c',
        },
        {
          url: '/nfts/illogic1600.webp',
          revision: '1c5de71d67089b31b3c1b2eac1a75cab',
        },
        {
          url: '/nfts/illogic2768.png',
          revision: '3c7691e629a4985a7c51bd1c9a0968d9',
        },
        {
          url: '/nfts/illogic2768.webp',
          revision: 'd63404028b3174188ec3245ebeabb3ee',
        },
        {
          url: '/nfts/illogic4739.png',
          revision: '7646a53a536007e1dccb5ab7eb6286bb',
        },
        {
          url: '/nfts/illogic4739.webp',
          revision: 'a2890e29b717c605402ee07382d49a75',
        },
        {
          url: '/nfts/illogic4946.png',
          revision: '62e26a792fe2136f8c36ac84e1b4ef05',
        },
        {
          url: '/nfts/illogic4946.webp',
          revision: '42f6531bc0306ebf4e43dc831362e7c1',
        },
        {
          url: '/nfts/illogic6255.png',
          revision: '9f0621a13f182d9c015af3496cbc7866',
        },
        {
          url: '/nfts/illogic6255.webp',
          revision: 'f30e223385bb811e6b8a19c1cae26bdf',
        },
        {
          url: '/nfts/illogic7298.png',
          revision: '54c650e6060c1bc650798430321b25df',
        },
        {
          url: '/nfts/illogic7298.webp',
          revision: '51580fbe21eff99549d49abf1fcf2325',
        },
        {
          url: '/nfts/illogic8273.png',
          revision: 'bc18f8f16040403475a1bb95935b436b',
        },
        {
          url: '/nfts/illogic8273.webp',
          revision: 'bb13dcb4c7ed70dac9f831a0355201f5',
        },
        {
          url: '/nfts/loser-club-catman.jpg',
          revision: '5fd6c718586a7aa23dc790f11ffbb9d6',
        },
        {
          url: '/nfts/loser-club-catman.webp',
          revision: '5dd30f740fc02b23f04fd29afc0a054c',
        },
        {
          url: '/nfts/loser-club-eth-eyes.jpg',
          revision: 'a140845c153a89e040b147d7a3aa4599',
        },
        {
          url: '/nfts/loser-club-eth-eyes.webp',
          revision: '4c952a79677ba1e307dc675c7dd4e564',
        },
        {
          url: '/nfts/tiny-astro1347.png',
          revision: 'f50d27ea2c51c9486070019ff112ba0d',
        },
        {
          url: '/nfts/tiny-astro1347.webp',
          revision: 'd3f0890d91ea7c664f627d7b20e61473',
        },
        {
          url: '/nfts/tiny-astro219.png',
          revision: '3a40b2aea56f9925cab7f51e88850ec1',
        },
        {
          url: '/nfts/tiny-astro219.webp',
          revision: '4313cbf006816adac694d638cce1d4ab',
        },
        {
          url: '/projects/ayoba.jpg',
          revision: '5e1c5f59a8dcfc13b9d63838bd9a61fe',
        },
        {
          url: '/projects/ayoba.webp',
          revision: '2b98deae49b7151c4ba745a0ce108e83',
        },
        {
          url: '/projects/evro.jpg',
          revision: 'bdcd7bc028c83e882e646fabab471693',
        },
        {
          url: '/projects/evro.webp',
          revision: '62878fcb2947a100b86d4f03aafe79d7',
        },
        {
          url: '/projects/gtm.jpg',
          revision: '34f6f5bbd7a9c53cae67129b15874aa8',
        },
        {
          url: '/projects/gtm.webp',
          revision: 'ec1c3641ba5fada8da881bfdb56e5df9',
        },
        {
          url: '/robots.txt',
          revision: 'fe52175d8747cfc92e2a1a190f269f5f',
        },
        {
          url: '/sitemap.xml',
          revision: 'de61f7f73beac319172151c42266e434',
        },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: c,
              event: i,
              state: s,
            }) =>
              c && 'opaqueredirect' === c.type
                ? new Response(c.body, {
                    status: 200,
                    statusText: 'OK',
                    headers: c.headers,
                  })
                : c,
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const c = e.pathname;
        return !c.startsWith('/api/auth/') && !!c.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
          }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 3600,
          }),
        ],
      }),
      'GET'
    );
});
