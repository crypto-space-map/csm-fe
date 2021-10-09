const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { PATHS, name } = require('./constants');

module.exports = require('./webpack.init.config')({
  mode: 'production',
  extractCss: true,
  inject: true,
  chunks: 'all',
  htmlPluginMinify: {
    collapseWhitespace: true,
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    useShortDoctype: true,
    removeEmptyAttributes: true,
    removeStyleLinkTypeAttributes: true,
    keepClosingSlash: true,
    minifyJS: true,
    minifyCSS: true,
    minifyURLs: true,
  },
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: `${PATHS.assets}/[id].[name][contenthash].js`,
    chunkFilename: `[id].${name}.[contenthash].js`,
    hashFunction: 'sha1',
    hashDigestLength: 40,
  },
  minimizer: [
    `...`,
    new CssMinimizerPlugin({
      minify: CssMinimizerPlugin.cleanCssMinify,
      minimizerOptions: {
        preset: [
          'default',
          {
            discardComments: { removeAll: true },
          },
        ],
      },
    }),
  ],
});
