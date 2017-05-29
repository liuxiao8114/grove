1. app
依赖：merge-descriptors
    function createApp() {
      var app = function(req, res, next) {
        app.handle(req, res, next)
      }

      mixin(app, EventEmitter, false)
      mixin(app, proto, false)

      app.init()

    }
2. application.js
依赖：finalhandler, array-flatten
```js
var app = export = module.export = {}
app.init = function init() {

}
app.defaultConfiguration = function defaultConfiguration() {

}

app.lazyrouter = function lazyrouter() {
  if(!this._router) {
    this._router = new Router({
      caseSensitive: this.enabled('case sensitive routing'),
      strict: this.enabled('')
    })
  }
  this._router.use(middleware.init(this))
}

app.handle = function handle(req, res, callback) {
  var router = this._router
  var done = callback || finalhandler(req, res, {
    env: this.get('env'),
    onerror: logerror.bind(this)
  })

  router.handle(req, res, done)
}

app.route = function route(path) {
  this.lazyrouter()
  return this._router.route(path)
}
```

3. Router
```js
var proto = function(options) {
  function router(req, res, next) {
    router.handle(req, res, next)
  }

  router.__proto__ = proto

  router.params = {}
  router._params =[]

  return router
}

proto.param = function param(fn, name) {

}

```
