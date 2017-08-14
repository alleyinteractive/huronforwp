// For config
var path = require('path');
const webpack = require('webpack');

// Plugins
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {

  // styles
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
    },
  ];

  // Plugins
  const plugins = [];
  if (env.production) {
    plugins.push(new ExtractTextPlugin('css/[name].min.css'));
  }

  if (env.dev) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return {
    context: path.resolve(__dirname, '../../'),

    entry: {
      main: './src/js/index.js',
      styleguide: './src/sass/styleguide.scss',
    },

    output: {
      filename: 'js/[name].min.js',
      path: path.resolve(__dirname, '../../build'),
    },

    module: {
      rules: [
        {
          test: /\.s?css$/,
          use: env.production ?
            ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: cssLoaders,
            }) :
            [
              {
                loader: 'style-loader',
              },
              ...cssLoaders,
            ],
        },
      ]
    },

    plugins,

    // For hot reloading.
    devServer: {
      hot: true,
      quiet: false,
      noInfo: false,
      contentBase: '/build/',
      headers: { 'Access-Control-Allow-Origin': '*' },
      stats: { colors: true },
    },
  };
};
