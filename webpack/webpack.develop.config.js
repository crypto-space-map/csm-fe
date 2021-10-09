const { PATHS } = require('./constants');

module.exports = require('./webpack.init.config')({
  mode: 'development',
  extractCss: false,
  devServer: {
    port: 3000,
    host: 'localhost',
    public: 'localhost:3000',
    disableHostCheck: true,
    publicPath: '/',
    hot: true,
    watchContentBase: true,
    progress: true,
    open: true,
    historyApiFallback: true,
    clientLogLevel: 'silent',
    overlay: {
      errors: true,
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
