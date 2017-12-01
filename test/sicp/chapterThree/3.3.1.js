function Node() {
  let node, next
}

Node.prototype.car = function() {
  return this.node // for mocha has a bug when use array function with this
}
Node.prototype.cdr = function() {
  return this.next // for mocha has a bug when use array function with this
}

function isPair(x) {
  return x instanceof Node
}

function countNode(x) {
  if(!isPair(x)) return 0
  return countNode(x.car()) + countNode(x.cdr()) + 1
}

function countNodeRightVer(x, SET) {
  if(!SET) SET = new Set()
  if(!isPair(x)) return 0

  if(SET.has(x)) return countNodeRightVer(x.car(), SET) + countNodeRightVer(x.cdr(), SET)
  SET.add(x)
  return countNodeRightVer(x.car(), SET) + countNodeRightVer(x.cdr(), SET) + 1
}

function isLoop(x, N) {
  if(!N) N = new Set()
  if(!isPair(x)) return false

  N.add(x)
//  if(!isPair(x.car()) && !isPair(x.cdr())) return false
  if(N.has(x.cdr()) || N.has(x.car())) return true
  if(isPair(x.car()) && isLoop(x.car(), N)) return true
  if(isPair(x.cdr()) && isLoop(x.cdr(), N)) return true

  return false
}

function isLoopVer2(x, N) {
  if(!N) N = new Set()
  if(!isPair(x)) return false
}

export { Node, countNode, countNodeRightVer, isLoop }
