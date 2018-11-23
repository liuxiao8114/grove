import express from 'express'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackConfig from '../build/webpack.config'

var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
// const clientConfig = webpackConfig.find(x => x.target === 'web')

const compiler = webpack(webpackConfig)
const ROOT = path.normalize(`${__dirname}/..`)

// view engine setup
// will get Error: No default engine was specified and no extension was provided. if omitted
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(ROOT, 'public')));

app.use(webpackMiddleware(compiler));
app.use(webpackHotMiddleware(compiler));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.get('*', (req, res) => {
// match routes
// path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif')
// if the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'

// path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')
// returns '/foo/bar/baz/asdf'
  res.sendFile(path.join(ROOT, 'public', 'index.html'));
  // pick render
});

const port = process.env.PORT || 6001;
/*eslint-disable no-console */
app.listen(port, () => {
  console.log('Server startup on : ' + port);
})
/*eslint-enable no-console */
