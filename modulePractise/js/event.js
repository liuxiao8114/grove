let $;

$.Event = {
  addHandler: function() {

  },
  removeHandler: function() {

  },

  trigger: function() {

  }
}

function Event() {
  this.handlers = {}
}

Event.prototype = {
  constructor: Event,
  addHandler: function(type, handler) {
    if(!this.handlers[type]) {
      this.handlers[type] = new Array()
    }
    this.handlers[type].push(handler)
  },

  removeHandler: function(type, handler) {
    if(!this.handlers[type]) return
    let handlers = this.handlers[type]
        length = this.handlers[type].length
    for(let i = 0; i < length; i++) {
      if(handler === handlers[i]) {
        handlers.splice(i, 1)
        break
      }
    }
  },

  trigger: function(event) {
    
  }
}
