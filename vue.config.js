const path = require('path')

module.exports = {
  configureWebpack: {
    entry: './src/client/index.ts',
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/client/components'),
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  pages: {
    index: {
      entry: 'src/client/index.ts',
      template: 'public/index.html',
      title: 'Feathers Vue Boilerplate',
      chunks: ['main', 'chunk-vendors']
    }
  },
  outputDir: 'dist'
}
