const path = require('path')

module.exports = {
  configureWebpack: {
    entry: './src/client/index.js',
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/client/components'),
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  outputDir: 'public/js'
}
