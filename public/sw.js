if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return t[e]||(s=new Promise((async s=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},s=(s,t)=>{Promise.all(s.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(s)};self.define=(s,a,n)=>{t[s]||(t[s]=Promise.resolve().then((()=>{let t={};const i={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return t;case"module":return i;default:return e(s)}}))).then((e=>{const s=n(...e);return t.default||(t.default=s),t}))})))}}define("./sw.js",["./workbox-4a677df8"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/T7UKJybx4ZlWg4MvEAWtz/_buildManifest.js",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/T7UKJybx4ZlWg4MvEAWtz/_ssgManifest.js",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/chunks/508-fe155cafb39b87425550.js",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/chunks/729-d5801a8b865894c8bda1.js",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/chunks/main-c957fa7980f3619af6e8.js",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/chunks/pages/_app-1fd7ca8869d1918b64fc.js",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/chunks/pages/account-4b0c55b9b051bb747b10.js",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/chunks/pages/index-ebe391d7b882b095621a.js",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/chunks/pages/legal-36f5c16f86a4221c18ba.js",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/chunks/pages/post-f642dda1015edfdb3023.js",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/chunks/pages/profile-6908d1f671b94db3dc07.js",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/chunks/polyfills-a54b4f32bdc1ef890ddd.js",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/chunks/webpack-ddd010a953737b6e3536.js",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/css/0dd4c88fa497c86c48c6.css",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/css/1f5b4a81f5f70ec0a4d3.css",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/css/8d95ab7c89865a894c19.css",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/css/a5e72d45dd0176dc048c.css",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/css/d2013efaf55483b70fe1.css",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/_next/static/css/d9b06c892f86cb12b946.css",revision:"T7UKJybx4ZlWg4MvEAWtz"},{url:"/assets/logos/brandmark.png",revision:"8d2a25f75033088bb0d22d27eab9344c"},{url:"/assets/logos/brandmark.svg",revision:"c4bd41e8755dfa19eeda08ad30523af8"},{url:"/assets/logos/brandmark192.png",revision:"f794bd5032208ac7c7aaf2a91b097bc1"},{url:"/assets/logos/brandmark512.png",revision:"cbacab36d754b62b4b448c400dd8904b"},{url:"/assets/logos/lettermark.png",revision:"a6a369f46d9d0a05c60b66c4b2bf82fa"},{url:"/assets/logos/lettermark.svg",revision:"2b8993ada4e0194000052b3a305a3527"},{url:"/assets/temp/boi.jpg",revision:"6858c926441c0e7c4ad401a15797c5df"},{url:"/assets/temp/hmm.jpg",revision:"3ec42f510d04f8ee1a1f881420e19963"},{url:"/assets/temp/posts/1.jpg",revision:"c4596ee255e3718619bf4893a3b8f04c"},{url:"/assets/temp/posts/10.jpg",revision:"354ecd2b7d1ed6ac14ca7da77334bac3"},{url:"/assets/temp/posts/2.jpg",revision:"af36ea04db1f683ebb612a1f5428386c"},{url:"/assets/temp/posts/3.jpg",revision:"e9d15b38689a3cc4f03e31280d5c6aab"},{url:"/assets/temp/posts/4.jpg",revision:"8e51222c0105da48101d9032d4af194a"},{url:"/assets/temp/posts/5.jpg",revision:"ccebe55a99d48de9dd06fbbd5590de6a"},{url:"/assets/temp/posts/6.jpg",revision:"d11d22f69fa099ee4daec2fa86f0405d"},{url:"/assets/temp/posts/7.jpg",revision:"c232b85541b8ed382d958c8793cd1dd6"},{url:"/assets/temp/posts/8.jpg",revision:"fb64d334442f8a5bf35361db5495ce82"},{url:"/assets/temp/posts/9.jpg",revision:"961080ceecd547b04ad189db19cec5da"},{url:"/favicon.ico",revision:"594a88fc887fc38217ee301767130de8"},{url:"/manifest.json",revision:"74897e57388777c848c212b6301e2a39"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
