const NOT_FOUND_MSG = 'No this key in Table'
const Table = () => {
  let result = {}

  const lookup = n => {
    if(!result[n]) return NOT_FOUND_MSG
    return result[n]
  }

  function insert(key, value) {
    result[key] = value
  }

  return {
   lookup, insert
  }
}

//practise 3-27
const fib = n => {
  if(n === 0 || n === 1) return n
  return fib(n - 1) + fib(n - 2)
}

const memorize = (f, t) => n => {
  let ret = t.lookup(n)
  if(ret === NOT_FOUND_MSG) {
    ret = f(n)
    t.insert(n, ret)
  }
  return ret
}

const memoFib = memorize(n => {
  if(n === 0 || n === 1) return n
  return memoFib(n - 1) + memoFib(n - 2)
}, Table())

export { fib, memoFib }
