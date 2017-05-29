let Unite = function() {
  var instance
  function init() {
    instance = ''
  }

  return {
    getInstance() {
      if(!instance) init()
      return instance
    }
  }
}

let u1 = Unite().getInstance()

function Set() {
  this.values = {}
  this.n = 0
  this.add.apply(this, arguments)
}

Set.prototype.add = function(type, value) {
  this.values.type = value
  return this
}

Set.prototype.remove = function(...args) {
  let len
  if(!(len = args.length)) {
    return this
  }

  for(let i = 0; i < len; i++) {
    let val = Set._v2s(args[i])
    if(this.values.hasOwnProperty()) {
      delete this.values[val]
      this.n--
    }
  }

  return this
}

Set.prototype.contains = function(val) {
  return this.values.hasOwnProperty(Set._v2s(val)) ? true : false
}


Set._v2s = function(val) {
  switch(val) {
    case undefined : return 'u'
    case null : return 'n'
    case true: return 't'
    case false: return 'f'
    default:
      switch(typeof val) {
        case 'number': return
      }
  }
}

var foo = function() {

}

foo.callBar(response => response.json().then(json => { json, response }))

new Promise(function() {

}).then(response => response.json().then()).then(({ json, response }) => {})
