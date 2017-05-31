module.export = merge

var hasOwnProperty = Object.prototype.hasOwnProperty

function merge(dest, src, redefine) {
  if(!dest) {
    new TypeError()
  }

  if(!src) {
    new TypeError()
  }

  if(!redefine) {
    redefine = true
  }

  Object.getOwnPropertyNames(src).forEach(name => {
    if(!redefine && hasOwnProperty.call(dest, name)) {
      return
    }

    var descriptor = Object.getOwnPropertyDescriptor(src, name)
    Object.defineProperty(dest, name, descriptor)

    return dest
  })

}
