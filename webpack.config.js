// var webpack = require('webpack');
var path = require('path');
import extend from 'extend';
//var HtmlWebpackPlugin = require('html-webpack-plugin');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'public');
const BUILD_PATH = path.resolve(ROOT_PATH, 'public');

const config = {
  devtool: 'eval-source-map',
  /*
  entry: {
      server: path.resolve(APP_PATH,'scripts/example.js')
  },
  output: {
      path: BUILD_PATH,
      filename: 'bundle.js'
  },
  */
  module: {
    loaders: [
      {
        test: /.\jsx?$/,
        include: APP_PATH,
        exclude: './node_modules',
        loader: 'babel'
      },{
        test: /\.scss$/,
        loaders: ['style','css','sass']
      }
    ]
  },
  resolve: {
    extensions: ['','.js','.jsx']
  },
  extensions: {

  }
}

const clientConfig = extend(true, {}, config, {
  entry: {
      client: path.resolve(ROOT_PATH,'src/client.js')
  },
  output: {
      path: BUILD_PATH,
      filename: '[name].bundle.js'
  },

  target: 'web'
})

const serverConfig = extend(true, {}, config, {
  entry: {
      server: path.resolve(ROOT_PATH,'server.js')
  },
  output: {
      path: BUILD_PATH,
      filename: '[name].bundle.js'
  },

  target: 'node'
})

export default [ clientConfig, serverConfig ]
