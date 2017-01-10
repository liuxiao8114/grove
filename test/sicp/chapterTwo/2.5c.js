function Complex(type, x, y) {
  this.type = type
  this.valueX = x
  this.valueY = y
}

Complex.prototype.real = () => {
  return this.real || 'no real'
}

Complex.prototype.imag = () => {
  return this.imag || 'no imag'
}

Complex.prototype.mag = () => {
  return this.mag || 'no mag'
}

Complex.prototype.ang = () => {
  return this.ang || 'no ang'
}

const RECT_TYPE = 'RECT_TYPE'
const c1 = new Complex(RECT_TYPE, 3, 4)


function dealWithRectType(type, o, x, y) {
  o.real = x
  o.imag = y
  o.mag = x + y
  o.ang = x / y
}

function dealWithPolType(type, o, x, y) {

}

function dealWithInit() {

}
