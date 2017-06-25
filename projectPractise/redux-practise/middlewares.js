import { createStore } from 'redux'

const store = createStore()

function showLog(dispatch, action) {
  const next = store.dispatch
  store.dispatch = action => {
    console.log('dipatch start')
    next(action)
    console.log('dispatch end')
  }
}


function logger(dispatch, action) {
  const next = store.dispatch
  try {
    dispatch(action)
  } catch(e) {
    const errorLog = (e) => {
      console.log(e)
    }
  }
}

function log4(store) {
  let next = store.dispatch
  store.dispatch = action => {
    console.log('log begin')
    let result = next(action)
    console.log('log end')
    return result
  }
}

function log5(store) {
  let next = store.dispatch
  return action => {
    console.log('log begin')
    let result = next(action)
    console.log('log end')
    return result
  }
}

function applyMiddewares(store, middlewares) {
  middlewares = middlewares.slice()
  middlewares.reverse()

  let dispatch = store.dispatch

  middlewares.forEach(middleware => {
    dispatch = middleware(store)(dispatch)
  })
}
