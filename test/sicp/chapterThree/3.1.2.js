let f1 = n => {
  let count = 0
  if (count > 0) return 0
  count++
  return n
}

let f2 = () => {
  let count = 0
  return n => {
    if (count > 0) return 0
    count++
    return n
  }
}
