module.exports = {
  css: {
    extract: true,
    loaderOptions: {
      sass: {
        additionalData: ''
      }
    }
  },
  configureWebpack: {
    externals: process.env.NODE_ENV === 'production' ? {
      vue: 'Vue',
      'portal-vue': 'PortalVue'
    } : {}
  }
}
