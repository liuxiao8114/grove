var path = require('path');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'public');
const BUILD_PATH = path.resolve(ROOT_PATH, 'public');

const config = {
  devtool: 'eval-source-map',
  entry: {
      client: path.resolve(ROOT_PATH,'src/client.js')
  },
  output: {
      path: BUILD_PATH,
      filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /.\jsx?$/,
        loader: 'babel-loader',
        exclude: path.resolve(ROOT_PATH,'node_modules/')
      },{
        test: /\.scss$/,
        use: [
         'style-loader',
         {
           loader: 'css-loader',
           options: {
             modules: true,
             sourceMap: true,
             importLoaders: 1
           }
         },
         'postcss-loader',
         'sass-loader'
       ]
      }
    ]
  },
  resolve: {
    extensions: ['.js','.jsx']
  }
}

export default config
