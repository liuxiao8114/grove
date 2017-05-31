function Range(from, to) {
  this.from = from
  this.to = to
}

Range.prototype = {
  includes(x) {
    return this.from <= x && this.to >= x
  },

  foreach(f) {
    
  }
}
