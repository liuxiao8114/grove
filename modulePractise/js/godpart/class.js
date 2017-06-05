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

function eat(food) {
  return 'i ' + food
}

const manageAction = {
  eat: food => eat(food),
  anotherEat: eat
}

const FISH = 'FISH'

manageAction.eat(FISH)
manageAction.anotherEat(FISH)
