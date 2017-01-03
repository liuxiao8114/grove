const filter = () => {

}

// [1, 2, 3].map(n => n * 2)
//{ a: 1, b: 2, c: 3}.map(n => n * 3)
export default function myMap(fn, ...items) {
  let ret = new Array()
  if(items.length === 1) {
    let item = items[0]
    if(typeof item === 'object') {
      for(let i in item) {
        ret.push(fn(i))
      }
    } else if(item instanceof Array) {
      for(let i = 0; i < item.length; i++) {
        ret.push(fn(i))
      }
    }
  } else {
    for(let i = 0; i < items.length; i++) {
      ret.push(fn(i))
    }
  }
  return ret
}
