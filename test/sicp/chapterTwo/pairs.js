const range = n => {
  const arr = []
  for(let i = 0; i< n; i++) {
    arr.push(i)
  }
  return arr
}

const permutations = (...arr) => {
  if(!arr) return []
  return arr.map((item, n) => {
    return permutations(arr.splice(n, 1)).map(subItem => {
      if(subItem instanceof Array) {
        const combine = subItem.unshift(item)
        return [].concat(...combine)
        // return Array.prototype.concat.apply([], subItem.unshift(item))
      } else {
        return [].concat(item, subItem)
      }
    })
  })
}

// permutations(1,2,3)
export default permutations
