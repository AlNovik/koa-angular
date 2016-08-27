const NODE_ENV = process.env.NODE_ENV || 'DEV';
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  context: __dirname + '/clients',
  entry: {
    app: './app',
    admin: './admin',
    vendor: [
      'angular'
    ]
  },
  output: {
    path: __dirname + '/dist',
    filename: NODE_ENV === 'DEV' ? '[name].js' : 'js/[name].[hash].js'
  },

  externals: {},

  // watch: NODE_ENV == 'development',

  watchOptions: {
    aggregateTimeout: 100
  },
  devtool: NODE_ENV === 'development' ? 'cheap-inline-module-source-map' : null,

  plugins: [
    new webpack.NoErrorsPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      // The order of this array matters
      names: ['common', 'vendor'],
      minChunks: 2
    }),

    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: 'body',
      hash: true,
      chunks: ['common', 'vendor', 'app']
    }),

    new HtmlWebpackPlugin({
      template: 'admin/index.html',
      inject: 'body',
      hash: true,
      filename: 'admin/index.html',
      chunks: ['common', 'vendor', 'admin']
    }),

    new CleanWebpackPlugin(['dist', 'build']),

    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),

    new webpack.ContextReplacementPlugin(/node_modules\/moment\/locale/, /en|es/)

  ],

  resolve: {
    modulesDirectories: [
      path.join(__dirname, 'node_modules'),
      path.join(__dirname, 'lib')
    ],
    extensions: ['', '.js']
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /\/node_modules\/|\/bower_components\/|\/lib\//,
      loader: 'ng-annotate!babel' // eslint
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /\.styl$/,
      loader: 'style!css!stylus'
    }, {
      test: /\.(png|jpg|svg|ttf|eof|eot|woff|woff2|gif)$/,
      loader: 'file?name=/images/[name].[hash].[ext]?[hash]'
    }, {
      test: /\.json$/,
      loader: 'json'
    }],

    noParse: /angular\/angular.js/
  },

  devServer: {
    host: 'localhost',
    port: 7007
  }
};

