function Box(width, height) {
  this.width = width,
  this.height = height
}

Box.prototype.getSize = function() {
  return this.width * this.height
}

function FancyBox(style) {
  this.style = style
}

FancyBox.prototype.getStyle = function() {
  return this.style
}

const WIDTH = 5, HEIGHT = 10
const style = { color: 'blue' }

describe('inherit in es6', () => {
  it('using Object.assign', () => {
    Object.assign(FancyBox.prototype, Box.prototype)
    let fb = new FancyBox(style)
    fb.width = WIDTH, fb.height = HEIGHT

    expect(fb.getSize()).toBe(WIDTH * HEIGHT)
    expect(fb.getStyle()).toBe(style)
  })

  it('using Object.create', () => {
    Object.assign(FancyBox.prototype, Box.prototype)
    let fb = new FancyBox(style)
    fb.width = WIDTH, fb.height = HEIGHT
    
    expect(fb.getSize()).toBe(WIDTH * HEIGHT)
    expect(fb.getStyle()).toBe(style)
  })
})
