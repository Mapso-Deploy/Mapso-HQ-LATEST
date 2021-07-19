const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-blank-js": hot(preferDefault(require("/Users/cozykev/Documents/GitHub/Mapso-HQ-LATEST/src/pages/blank.js"))),
  "component---src-pages-explore-js": hot(preferDefault(require("/Users/cozykev/Documents/GitHub/Mapso-HQ-LATEST/src/pages/explore.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/cozykev/Documents/GitHub/Mapso-HQ-LATEST/src/pages/index.js"))),
  "component---src-pages-inquiries-js": hot(preferDefault(require("/Users/cozykev/Documents/GitHub/Mapso-HQ-LATEST/src/pages/inquiries.js"))),
  "component---src-pages-products-js": hot(preferDefault(require("/Users/cozykev/Documents/GitHub/Mapso-HQ-LATEST/src/pages/products.js"))),
  "component---src-pages-test-js": hot(preferDefault(require("/Users/cozykev/Documents/GitHub/Mapso-HQ-LATEST/src/pages/test.js")))
}

