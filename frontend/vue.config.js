const { GenerateSW } = require("workbox-webpack-plugin");
const withPWA = require('next-pwa')

module.exports = {
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    register: true,
    scope: '/app',
    sw: 'service-worker.js',
  },
  
  // output built static files to Laravel's public dir.
  // note the "build" script in package.json needs to be modified as well.
  outputDir: '../public',
  
  configureWebpack: {
    plugins: [new GenerateSW()]
  },
  
  // modify the location of the generated HTML file.
  // make sure to do this only in production.
  indexPath: process.env.NODE_ENV === 'production'
    ? '../resources/views/index.blade.php'
    : 'index.html'
}
