const webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: ['./src/js/main.js', './src/css/main-pseudo.sass'],
  output: {
    filename: 'Sprung17Pseudo/js/main.js'
  },
  module: {

    rules: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
      { // regular css files
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader?importLoaders=1',
        }),
      },
      { // sass / scss loader for webpack
        test: /\.(sass|scss)$/,
        loader: ExtractTextPlugin.extract(['css-loader?url=false', 'postcss-loader', 'sass-loader'])
      }
    ]
  },
  plugins: [
    /*new FaviconsWebpackPlugin('./src/images/favicon.png'),*/
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
             'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
        include: /\.min\.js$/,
        minimize: true
    }),
    new ExtractTextPlugin({ // define where to save the file
      filename: 'Sprung17Pseudo/css/template.css',
      allChunks: true,
    }),
    new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.min\.css$/,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } }
    })
  ],
};