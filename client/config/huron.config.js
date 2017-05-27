/**
 * The Huron configuration file.
 */

// Requires
path = require('path');

/**
 * A configuration object for your Huron settings.
 * For a detailed explanation,
 * @see  https://github.com/alleyinteractive/huron/blob/master/config/README.md
 */
module.exports = {
  entry: 'global',
  kss: 'client/sass',
  kssExtension: '.scss',
  output: 'partials',
  prototypes: [
    'sample',
    {
      title: 'styleguide',
      css: ['static/styleguide.min.css'],
    },
  ],
  root: 'static/prototype',
};