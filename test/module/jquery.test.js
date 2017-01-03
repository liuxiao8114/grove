let jQuery = (selector, context) => new jQuery.fn.init(selector, context)

const version = '1.11.3'
jQuery.fn = jQuery.prototype = {
  jquery: version,
  constructor: jQuery
}

// $.extend(fn)
jQuery.extend = jQuery.fn.extend = function() {

}

jQuery.extend({

})

//$('#id') & $('node-name') & $()
let init = jQuery.fn.init = (selector, context) => {
  if(typeof selector === 'string') {

  } else if(selector.nodeType) {

  }
}
/*
1. 将init作为构造函数使用
  1-1构造函数的原型作为新对象的原型。即由同一个构造函数创建的对象从同一个原型对象继承
2. 为了保证this是jQuery的实例，将init的原型指向jQuery的原型
3.
*/
init.prototype = jQuery.fn

let aQuery = () => {
  return new aQuery.prototype.init()
}

aQuery.prototype.init = () => {
  this.name = 'lei'
}

aQuery.prototype.name = 'liu'
