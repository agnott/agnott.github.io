const webpack = require('webpack');
const glob = require('glob');

const PATHS = {
  INPUT: {
    JS: `${__dirname}/js`
  },
  OUTPUT: `${__dirname}/build`
};

module.exports = {
  entry: {
    bundle: `${PATHS.INPUT.JS}/main.js`,
  },
  output: {
    path: PATHS.OUTPUT,
    publicPath: `build/`,

    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [require('@babel/plugin-syntax-dynamic-import'), require('@babel/plugin-proposal-object-rest-spread')]
        }
      }, {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: './',
  }
};
