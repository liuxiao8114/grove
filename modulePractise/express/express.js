import req from ''
import res from ''
import proto from './application'
import mixin from 'merge-descriptors'
import events from 'events'

const EventEmitter = events.EventEmitter

exports = module.exports = createApplication

function createApplication() {
  var app = function(req, res, next) {
    app.handle(req, res, next)
  }

  mixin(app, proto, false)
  mixin(app, EventEmitter.prototype, false)

  app._request = { _proto_: req, app: app }
  app._response = { _proto_: res, app: app }

  app.init()
  return app
}

exports.application = proto
exports.request = req

[
  'json',
  'session'
].forEach(function(name) {
  Object.defineProperty(exports, name, {
    get: function() {
      throw new Error('Most middleware (like ' + name + ') is no longer')
    }
  })
})
