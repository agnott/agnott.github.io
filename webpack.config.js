const webpack = require('webpack');

const PATHS = {
  INPUT: {
    JS: `${__dirname}/js`
  },
  OUTPUT: `${__dirname}`
};

module.exports = {
  entry: [
    `${PATHS.INPUT.JS}/main.js`,
  ],
  output: {
    path: PATHS.OUTPUT,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [require('@babel/plugin-proposal-object-rest-spread')]
        }
      }, {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: './'
  }
};
