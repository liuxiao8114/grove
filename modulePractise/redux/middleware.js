/*eslint no-console: "off"*/
/*eslint no-unused-vars: "off"*/
import store from 'redux'

/*Attempt3*/
function patchStoreToAddLogging(store) {
  let next  = store.dispatch
  store.dispatch = action => {
    console.log('')
    let result = next(action)
    console.log('')
    return result
  }
}

function patchStoreToAddCrashReporting(store) {
  let next = store.dispatch
  store.dispatch = action => {
    try {
      return next(action)
    } catch (err) {
      console.error()
      throw err
    }
  }
}

patchStoreToAddLogging(store)
patchStoreToAddCrashReporting(store)

/*Attempt4*/
function logger(store) {
  let next = store.dispatch
  return action => {
    console.log()
    let result = next(action)
    console.log()
    return result
  }
}

function reportErr(store) {
  let next = store.dispatch
  return action => {
    try {
      return next(action)
    } catch(err) {
      console.error('Caught an exception!', err)
      throw err
    }
  }
}

function delegate(store, middlewares) {
  middlewares = middlewares.slice() // 确保数组
  middlewares.reverse() //调用栈，由于先入后被调用，改变顺序
  middlewares.forEach(middleware => {
    store.dispatch = middleware(store)
  })
}

/*
// first time
store.dispatch = action => {
  console.log()
}

// second time

store.dispatch = aciton => {
  try {
    console.log()
    //
  } ...
}
*/

/*Attempt5*/
function logger5(store) {
  return next => action => {
    console.log()
    let result = next(action)
    console.log()
    return result
  }
}

function report5(store) {
  return next => action => {

  }
}

/*Attempt6*/
function applyMiddleware(store, middlewares) {
  middlewares = middlewares.slice()

  let dispatch = store.dispatch
  middlewares.forEach(middleware => {
    dispatch = middleware(store)(dispatch)
  })
  return Object.assign({}, store, { dispatch })
}
