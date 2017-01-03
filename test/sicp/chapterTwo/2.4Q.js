export function cons(x, y) { return m => m(x, y) }

export function car(cons) { return cons((p, q) => p) }

car(cons(1, 2)) //1
