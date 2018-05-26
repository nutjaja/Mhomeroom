importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "app",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.cb8c9b89046d4c967c16.js",
    "revision": "086ae4d786470e5670838c6db1654306"
  },
  {
    "url": "/_nuxt/layouts_default.c192421110e465992fec.js",
    "revision": "ec07321a1e6ad781beec9cf04b9bd5ac"
  },
  {
    "url": "/_nuxt/layouts_public.86ce714af1cc7ad482a0.js",
    "revision": "ade8e7565fbc56234f8a414c0bd22dc3"
  },
  {
    "url": "/_nuxt/manifest.a6d0d133786a1a7ad32d.js",
    "revision": "3d1de800cc59d8eff0deff63df7ba5ee"
  },
  {
    "url": "/_nuxt/pages_about.8f51071513c9f69f9844.js",
    "revision": "5c177c7c9069931102648b6ce390e954"
  },
  {
    "url": "/_nuxt/pages_chat.3819d6f16636e4f193d7.js",
    "revision": "9e26c155770fec3ed1dc5e66cc21f66f"
  },
  {
    "url": "/_nuxt/pages_grade.227ee1233720720a5262.js",
    "revision": "8e76e54afd94c4601f8301a2da7fec27"
  },
  {
    "url": "/_nuxt/pages_index.c1b3d1186d9b1e3bb2ee.js",
    "revision": "c472bf13ce8d67c6bdb6cb7a1130879e"
  },
  {
    "url": "/_nuxt/pages_register.56eac7fc18fb8d1fb0e5.js",
    "revision": "70678cc509a48b5e72aaedb4607756a1"
  },
  {
    "url": "/_nuxt/pages_stlist.0d3b394b38deb2f05ff2.js",
    "revision": "feff23845a9498d09660ed628c70925b"
  },
  {
    "url": "/_nuxt/pages_student_edit.fd0eba4ce7d2e7073c66.js",
    "revision": "1566e0c5e071e115202f2800b0c8ffad"
  },
  {
    "url": "/_nuxt/pages_student_index.17f1b197a461727f40f3.js",
    "revision": "760bb85b447badb58aedef260859701a"
  },
  {
    "url": "/_nuxt/pages_student.3f71aab2361b69e67644.js",
    "revision": "d74468ac29173365a3e3851de51ad773"
  },
  {
    "url": "/_nuxt/pages_student2.53ca75bcfcaab75a4143.js",
    "revision": "b4c5a0c16042bff51664d7f242aaf7f6"
  },
  {
    "url": "/_nuxt/pages_studentlist.c6a9dd80fd20f277ab1c.js",
    "revision": "724529efdcd71d08ce62a80a4f51c08e"
  },
  {
    "url": "/_nuxt/pages_studentlistOld.41b5c6a244baa608023d.js",
    "revision": "c70f777ec24d83b7b03ae328c1a89162"
  },
  {
    "url": "/_nuxt/pages_studentlistvuetify.b4ad3b1e0bfbdc2db3ac.js",
    "revision": "b7b2c4d06d2e79f93fd441e3a8e84064"
  },
  {
    "url": "/_nuxt/vendor.734e5d6f1eb17e930737.js",
    "revision": "6b758d2c91933e95a6c89a505b83287e"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

