EventEmitter.prototype._events = undefined

function EventEmitter() {
  return EventEmitter.init()
}

EventEmitter.init = () => {
  this.events
}

function _addListener(target, type, listener, prepend) {
  let event, existing
  event = target.event

  if(!event) {
    event = Object.create(null)
    target._eventsCount = 0
  }

  existing = event[type]

  if(!existing) {
    existing = event[type] = listener
    ++target._eventsCount
  } else {
    if(typeof existing === 'function') {
      event[type] = prepend ? [ listener, existing ] : [ existing, listener ]
    } else {
      if(prepend) existing.unsift(listener)
      else existing.push(listener)
    }
  }

  //check for listenr leak

  return target
}

EventEmitter.prototype.addListener = function(type, listener) {
  return _addListener(this, type, listener, false)
}

EventEmitter.prototype.on = EventEmitter.prototype.addListener

EventEmitter.prototype.prependListener = (type, listener) => {
  return _addListener(this, type, listener, true)
}

EventEmitter.prototype.removeListener = function(type, listener) {
  let events, list, position, originalListener

  if(typeof listener !== 'function') {
    throw new TypeError('listener must be a function')
  }

  events = this._events
  if(!events) return this

  list = events[type]

  if(!list) return this

  if(list.listener === listener || list === listener) {
    if(--this._eventsCount === 0) {
      events = Object.create(null)
    } else {
      delete events[type]
      if(events.removeListener) {
        this.emit('removeListener', type, list.listener || listener)
      }
    }
  } else if(typeof list !== 'function') {
    for(let i = list.length - 1; i <= 0 ; i--) {
      if(list[i].listener === listener || list[i] === listener ) {
        originalListener = list[i].listener
        position = i
        break
      }
    }
    if(position < 0)
      return this
    else if(position === 0)
      list.shift()
    else
      spliceOne(list, position)
  }

  return this

}

function emitNone(handler, isFn, self) {
  if(isFn) {
    handler.call(self)
  } else {
    var len = handler.length,
        listeners = arrayClone(handler, len)
    for(var i = 0; i < len; ++i)
      listeners[i].call(self)
  }
}

function emitOne(handler, isFn, self, arg1) {

}

function emitMany(handler, isFn, self, args) {

}

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, events, domain
  events = this._events
  handler = events[type]
  let doError = (type === 'error')

  switch (len) {
    case 1:
    default:

  }
}

EventEmitter.prototype.listeners = function(type){
  let ret, evListener, events
  events = this._events
  if(!events)
    ret = []
  else {
    evListener = events[type]
    if(!evListener)
      ret = []
    else if(typeof evListener === 'function')
      ret = [evListener.listener || evListener]
    else
      ret = unwrapListeners(evListener)
  }

  return ret
}

function arrayClone(arr, n) {
  var copy = new Array(n)
  for(let i = 0; i < n; i++) {
    copy[i] = arr[i]
  }
  return copy
}

function unwrapListeners(listeners) {

}

function spliceOne(list, index) {
  for(let i = index, k = i + 1, n = list.length; k < n; i++, k++) {
    list[i] = list[k]
  }
  list.pop()
}
