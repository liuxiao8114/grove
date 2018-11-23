var path = require('path');

const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'public')

const config = {
  mode: 'production',
  devtool: 'eval',
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
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        },
        exclude: path.resolve(ROOT_PATH,'node_modules/')
      }, {
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
