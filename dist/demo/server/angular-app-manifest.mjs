
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-IRAJBWWS.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IRAJBWWS.js"
    ],
    "route": "/about/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H4TVGGVQ.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FLDBI3EX.js"
    ],
    "route": "/api"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-24AGOROL.js"
    ],
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 19108, hash: 'fd113e4acd41acc8b0993cde4c49537f2fcf62bbf992ead6aa2082206808a6ce', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1205, hash: 'fc796b4100e5bacbbc387f7201c914fd71fdb919d8ce0b9cddbfb3924c007b40', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 24082, hash: 'eefa9252577b79354c6e77052db1daf97ad8cc9d5ed7a78a2e18a5f5f2fa3ca9', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 24044, hash: '277cd5b043d40daccbb730818ab48be9b81917adff4bc55112d433d37e976e2b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 25619, hash: '6295a077de3571f701cf330ce02069fe34d8b8def71e7486bfe52a4028b533df', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'api/index.html': {size: 25843, hash: '7f0c4edc3f107ba05e764a0ccf8ab1d67d93af8db1659be719a245767662876e', text: () => import('./assets-chunks/api_index_html.mjs').then(m => m.default)},
    'styles-2FFALGT3.css': {size: 27314, hash: 'b3Z3PF/VSWk', text: () => import('./assets-chunks/styles-2FFALGT3_css.mjs').then(m => m.default)}
  },
};
