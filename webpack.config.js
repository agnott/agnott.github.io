const webpack = require('webpack');

const PATHS = {
  INPUT: {
    JS: `${__dirname}/js`,
    CSS: `${__dirname}/css`
  },
  OUTPUT: `${__dirname}`
};

module.exports = {
  entry: [
    `${PATHS.INPUT.JS}/main.js`,
    `${PATHS.INPUT.CSS}/main.less`
  ],
  output: {
    path: PATHS.OUTPUT,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: PATHS.INPUT.JS,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      }, {
        test: /\.less$/,
        include: PATHS.INPUT.CSS,
        loaders: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: './'
  }
};
