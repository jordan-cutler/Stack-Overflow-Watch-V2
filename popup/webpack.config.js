const path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    './popup/src/scripts/index.js'
  ],

  output: {
    filename: 'popup.js',
    path: path.join(__dirname, '../', 'build'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules']
  },

  module: {
    rules: [{
      test: /\.(jsx|js)?$/,
      loader: 'babel-loader',
      exclude: /(node_modules)/,
      include: path.join(__dirname, 'src'),
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      exclude: /(node_modules)/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'}
      ]
    },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};
