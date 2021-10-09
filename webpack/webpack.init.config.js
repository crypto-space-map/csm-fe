// @ts-nocheck
const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { name, styleModeLoader, PATHS, STATS, externals } = require('./constants');
const { makePlugins, makeOptimization } = require('./additionals');
const { extendDefaultPlugins } = require('svgo');

module.exports = ({ htmlPluginMinify, mode, devServer, minimizer, output }) => {
  const isDev = mode === 'development';

  let plugins = makePlugins(isDev, htmlPluginMinify);

  const modeLoader = isDev ? 'style-loader' : MiniCssExtractPlugin.loader;

  return {
    experiments: {
      asset: true,
    },
    stats: STATS,
    mode,
    entry: {
      [name]: {
        import: path.join(__dirname, '../src/app', 'index.tsx'),
        dependOn: 'vendor',
      },
      vendor: ['react', 'react-dom', 'react-router-dom'],
    },

    output,
    watchOptions: {
      aggregateTimeout: 99,
    },
    devtool: isDev ? 'eval-source-map' : false,
    target: 'web',
    externals,
    plugins,
    cache: {
      type: 'filesystem',
    },
    optimization: makeOptimization(isDev, minimizer),
    module: {
      rules: [
        {
          test: [/\.jsx?$/, /\.tsx?$/],
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheCompression: false,
                cacheDirectory: true,
                sourceMap: isDev,
                configFile: path.resolve(__dirname, '../babel.config.js'),
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
          test: /\.p?css$/,
          use: [
            { loader: modeLoader, options: { esModule: true } },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['postcss-nested', 'postcss-simple-vars', 'postcss-preset-env', 'autoprefixer'],
                },
              },
            },
          ],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            { loader: modeLoader, options: { esModule: true } },
            { loader: 'css-loader' },
            {
              loader: 'sass-loader',
            },
          ],
          exclude: /(public)/,
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/,
          use: [
            'file-loader?hash=sha512&digest=hex&name=icons/[hash].[ext]',
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  arithmetic: true,
                  smooth: 50,
                },
                optipng: {
                  optimizationLevel: 7,
                },
                pngquant: {
                  speed: 6,
                },
                gifsicle: {
                  interlaced: false,
                },
                webp: {
                  quality: 75,
                },
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
      alias: {
        react: path.resolve(__dirname, '../node_modules/react'),
        'react-dom': path.resolve(__dirname, '../node_modules/react-dom'),
        'react-router-dom': path.resolve(__dirname, '../node_modules/react-router-dom'),
      },
    },
    resolveLoader: {
      extensions: ['.js'],
    },
    devServer: {
      ...devServer,
      contentBase: PATHS.public,
      stats: STATS,
    },
  };
};
