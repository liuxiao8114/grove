const version = '1.0'

let jQuery = (selector, context) => {
  return new jQuery.fn.init(selector, context)
}

let init = jQuery.fn.init = (selector, context) => {

}

init.prototype = jQuery.fn = jQuery.prototype = {

}

//$('#id').extend({ })
jQuery.extend = jQuery.fn.extend = function() {
  var target, src, copy, name, options, copyIsArray, clone,
      deep = false,
      i = 1,
      len = arguments.length
  target = arguments[0] || {}
  if(typeof target === 'boolean') {
    deep = target
    target = arguments[i] || {}
    i++
  }

  for(; i < len; i++) {
    if((options = arguments[i]) != null) {
      for(name in options) {
        src = target[name]
        copy = options[name]

        if(target === copy)
          continue

        if(deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
          if(copyIsArray) {
            copyIsArray = false
            clone = src && Array.isArray(src) ? src : []
          } else {
            clone = src && jQuery.isPlainObject(src) ? src : {}
          }
          target[name] = jQuery.extend(deep, clone, copy)
        } else if(copy !== undefined) {
          target[name] = copy
        }
      }
    }
  }
  return target
}

jQuery.extend({
  pushStack() {

  },

  map() {

  },

  slice() {

  }
})

jQuery.fn.extend({

})
