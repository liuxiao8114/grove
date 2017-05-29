import finalhandler from 'finalhandler'
import http from 'http'
import Router from './router'

let slice = Array.prototype.slice
let app = exports = module.exports = {}

app.init = function() {
  this.cache = {}
  this.defaultConfiguration()
}

app.defaultConfiguration = function() {
  let env = process.env.NODE_ENV || 'development'
  this.set()
}

app.lazyrouter = function() {
  if(!this._router) {
    this._router = new Router({
      caseSensitive: this.enabled('case sensitive routing'),
      strict: this.enabled('strict routing')
    })
  }
}

app.handle = function(req, res, callback) {
  var router = this._router
  var done = callback || finalhandler(req, res, {

  })

  if(!router) {
    done()
    return
  }

  router.handle(req, res, done)
}

app.use = function(fn) {
  let path = '/', offset = 0

  if(typeof fn !== 'function') {
    let arg = fn

    while(Array.isArray(arg) && arg.length !== 0) {
      arg = arg[0]
    }

    if(typeof arg !== 'function') {
      offset = 1
      path = fn
    }

  }
  slice.call(arguments, offset)
}

app.listen = function() {
  var server = http.createServer(this)
  return server.listen.apply(server, arguments)
}
