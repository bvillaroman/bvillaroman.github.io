// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/Users/bruce/bvillaroman/src/pages/404.js")),
  "component---src-pages-portraits-js": preferDefault(require("/Users/bruce/bvillaroman/src/pages/Portraits.js")),
  "component---src-pages-shoots-js": preferDefault(require("/Users/bruce/bvillaroman/src/pages/Shoots.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/bruce/bvillaroman/src/pages/about.js")),
  "component---src-pages-failure-js": preferDefault(require("/Users/bruce/bvillaroman/src/pages/failure.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/bruce/bvillaroman/src/pages/index.js")),
  "component---src-pages-success-js": preferDefault(require("/Users/bruce/bvillaroman/src/pages/success.js"))
}

exports.json = {
  "layout-index.json": require("/Users/bruce/bvillaroman/.cache/json/layout-index.json"),
  "404.json": require("/Users/bruce/bvillaroman/.cache/json/404.json"),
  "layout-index.json": require("/Users/bruce/bvillaroman/.cache/json/layout-index.json"),
  "portraits.json": require("/Users/bruce/bvillaroman/.cache/json/portraits.json"),
  "layout-index.json": require("/Users/bruce/bvillaroman/.cache/json/layout-index.json"),
  "shoots.json": require("/Users/bruce/bvillaroman/.cache/json/shoots.json"),
  "layout-index.json": require("/Users/bruce/bvillaroman/.cache/json/layout-index.json"),
  "about.json": require("/Users/bruce/bvillaroman/.cache/json/about.json"),
  "layout-index.json": require("/Users/bruce/bvillaroman/.cache/json/layout-index.json"),
  "failure.json": require("/Users/bruce/bvillaroman/.cache/json/failure.json"),
  "layout-index.json": require("/Users/bruce/bvillaroman/.cache/json/layout-index.json"),
  "index.json": require("/Users/bruce/bvillaroman/.cache/json/index.json"),
  "layout-index.json": require("/Users/bruce/bvillaroman/.cache/json/layout-index.json"),
  "success.json": require("/Users/bruce/bvillaroman/.cache/json/success.json"),
  "layout-index.json": require("/Users/bruce/bvillaroman/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/bruce/bvillaroman/.cache/json/404-html.json")
}

exports.layouts = {
  "component---src-layouts-index-js": preferDefault(require("/Users/bruce/bvillaroman/.cache/layouts/index.js"))
}