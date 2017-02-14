const cons = (x, y) => { x, y }

cons.prototype.car = z => z.x
cons.prototype.cdr = z => z.y

const queue = () => {
  let front, rear

  const emptyQueue = () => front ? true : false

  function setFront(i) {
    front = i
  }

  function setRear(i) {
    rear = i
  }

  function insertOne(i) {
    const newItem = cons(i, null)
    if(!front) {
      setFront(newItem)
      setRear(newItem)
      return front
    } else {
      rear.cdr = newItem
      setRear(newItem)
      return front
    }
  }

  function deleteOne() {
    if(front) return front = front.cdr
  }

  return {
    emptyQueue,
    insertOne,
    deleteOne
  }
}

export { queue, cons }
