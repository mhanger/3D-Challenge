const appConfig = require('./src/app.config')

const inlineLimit = 4096

const genAssetSubPath = dir => {
  return getAssetPath(
    options,
    `${dir}/[name]${options.filenameHashing ? '.[hash:8]' : ''}.[ext]`
  )
}

const genUrlLoaderOptions = dir => {
  return {
    limit: inlineLimit,
    // use explicit fallback to avoid regression in url-loader>=1.1.0
    fallback: {
      loader: require.resolve('file-loader'),
      options: {
        name: genAssetSubPath(dir)
      }
    }
  }
}

/** @type import('@vue/cli-service').ProjectOptions */
module.exports = {
  // https://github.com/neutrinojs/webpack-chain/tree/v4#getting-started
  chainWebpack(config) {
    // We provide the app's title in Webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', appConfig.title)

    const svgRule = config.module.rule('images')
    //const imagesRule = config.module.rule('images')
    config.module

            // Set up all the aliases we use in our app.
    config.resolve.alias.clear().merge(require('./aliases.config').webpack)

    // Don't allow importing .vue files without the extension, as
    // it's necessary for some Vetur autocompletions.
    config.resolve.extensions.delete('.vue')

    // Only enable performance hints for production builds,
    // outside of tests.
    config.performance.hints(
      process.env.NODE_ENV === 'production' &&
        !process.env.VUE_APP_TEST &&
        'warning'
    )
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true,
  },
  // Configure Webpack's dev server.
  // https://cli.vuejs.org/guide/cli-service.html
  devServer: {
    ...(process.env.API_BASE_URL
      ? // Proxy API endpoints to the production base URL.
        { proxy: { '/api': { target: process.env.API_BASE_URL } } }
      : // Proxy API endpoints a local mock API.
        { before: require('./tests/mock-api') }),
  },
}
