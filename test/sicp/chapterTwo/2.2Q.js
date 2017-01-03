const cons = (x, y) => {
  return {
    car: x,
    cdr: y
  }
}

const make_point = (x, y) => cons(x, y)
const start_point = (x, y) => make_point(x, y).car
const end_point = (x, y) => make_point(x, y).cdr

const make_segment = (pointX, pointY) => cons(pointX, pointY)
const start_segment = (x, y) => make_segment(x, y).car
const end_segment = (x, y) => make_segment(x, y).cdr

const midpoint_segment = segment => {
  return segment.car
}

midpoint_segment(make_point(1, 2), make_point(3, 4))
