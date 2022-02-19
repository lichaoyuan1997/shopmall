// const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        'assets':'@/assets',
        'common':'@/assets/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    }
  }
}
