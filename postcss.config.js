const path = require('path');

module.exports = {
  plugins: [
    require('postcss-nested'),
    require('postcss-simple-vars'),
    require('postcss-preset-env'),
    require('autoprefixer'),
  ],
};
