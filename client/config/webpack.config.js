// For config
var path = require('path');
const webpack = require('webpack');

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      sourceMap: true,
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
    },
  }
];

module.exports = (env) => ({
  entry: {
    global : './client/js/global.js',
    styleguide: './client/sass/styleguide.scss',
  },

  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, '../../static'),
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: env.production ?
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: cssLoaders
          }) :
          [
            {
              loader: 'style-loader',
            },
            ...cssLoaders
          ],
      },
    ]
  },

  plugins: env.production ?
    [new ExtractTextPlugin('[name].min.css')] :
    [new webpack.HotModuleReplacementPlugin()],

  // For hot reloading.
  devServer: {
    hot: true,
    quiet: false,
    noInfo: false,
    contentBase: '/static/',
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true },
  },
});
