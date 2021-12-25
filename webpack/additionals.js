const { name, styleModeLoader, PATHS, STATS } = require('./constants');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
// const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const makePlugins = (isDev, minify) => {
  const isAnalyze = process.env.BUNDLE_ANALYZE;

  const developPlugins = [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackBar(),
    new CaseSensitivePathsPlugin(),
    new DuplicatePackageCheckerPlugin(),
    // commented because of mac development problem
    // new WatchMissingNodeModulesPlugin(path.resolve('node_modules')),
    new CleanWebpackPlugin(),
  ];
  const commonPlugins = [
    new ESLintPlugin({ cache: true }),
    new StylelintPlugin({ files: '**/*.css', cache: true }),
    new Dotenv({ systemvars: true, systemvars: true }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}/${isDev ? '[fullhash].css' : '[contenthash].css'}`,
      chunkFilename: `${PATHS.assets}/${isDev ? '[fullhash].css' : '[contenthash].css'}`,
    }),
    new HtmlWebpackPlugin({
      favicon: `${PATHS.public}/favicon.ico`,
      filename: 'index.html',
      template: `${PATHS.public}/index.html`,
      inject: true,
      minify,
      chunks: 'all',
    }),
  ];
  if (isDev) {
    commonPlugins.push(...developPlugins);
  }
  if (isAnalyze) {
    commonPlugins.push(new BundleAnalyzerPlugin({ analyzerPort: 9009, analyzerMode: 'server' }));
  } else if (!isDev) {
    commonPlugins.push(
      new webpack.ids.HashedModuleIdsPlugin({
        context: __dirname,
        hashFunction: 'md4',
        hashDigest: 'hex',
        hashDigestLength: 4,
      })
    );
  }
  return commonPlugins;
};

const makeOptimization = (isDev, minimizer) => ({
  splitChunks: {
    chunks: 'all',
    minSize: 20000,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        chunks: 'all',
        enforce: true,
        name(module) {
          const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);
          return packageName?.length > 1 ? `${packageName[1].replace('@', '')}` : '';
        },
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
  minimize: !isDev,
  minimizer,
  usedExports: true,
});

module.exports = { makePlugins, makeOptimization };
