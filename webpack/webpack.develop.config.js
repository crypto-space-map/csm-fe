const { PATHS } = require('./constants');

module.exports = require('./webpack.init.config')({
  mode: 'development',
  extractCss: false,
  devServer: {
    allowedHosts: 'all',
    hot: true,
    port: 3000,
    host: 'localhost',
    open: true,
    historyApiFallback: true,
    static: {
      watchContentBase: true,
      publicPath: '/',
    },
    client: {
      overlay: {
        errors: true,
      },
      logging: 'info',
      progress: true,
    },
  },
  htmlPluginMinify: {},
  minimizer: undefined,
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: `${PATHS.assets}/[name][fullhash].js`,
  },
});
