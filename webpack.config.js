const webpack = require('webpack');

const PATHS = {
  INPUT: {
    JS: `${__dirname}/src`
  },
  OUTPUT: `${__dirname}`
};

module.exports = {
  entry: [
    `${PATHS.INPUT.JS}/main.js`
  ],
  output: {
    path: PATHS.OUTPUT,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        include: PATHS.INPUT.JS,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    port: 8000,
    contentBase: './'
  }
};
