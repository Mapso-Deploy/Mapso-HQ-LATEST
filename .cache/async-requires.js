// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-blank-js": () => import("./../../../src/pages/blank.js" /* webpackChunkName: "component---src-pages-blank-js" */),
  "component---src-pages-explore-js": () => import("./../../../src/pages/explore.js" /* webpackChunkName: "component---src-pages-explore-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-inquiries-js": () => import("./../../../src/pages/inquiries.js" /* webpackChunkName: "component---src-pages-inquiries-js" */),
  "component---src-pages-products-js": () => import("./../../../src/pages/products.js" /* webpackChunkName: "component---src-pages-products-js" */),
  "component---src-pages-test-js": () => import("./../../../src/pages/test.js" /* webpackChunkName: "component---src-pages-test-js" */)
}

