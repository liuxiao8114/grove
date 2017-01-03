
/* eslint-env mocha */
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-console */

function createStore(reducer, preloadedState, enhancer) {
  let idCounter = 1

  let currentState = preloadedState || {}
  let currentReducer = reducer

  if(enhancer && typeof enhancer === 'function'){
    return enhancer(createStore)(reducer, preloadedState)
  }

  let store = {
    id: idCounter++,
    dispatch: action => {
      currentState = currentReducer(this.getState, action)
      return action
    },
    getState: () => {
      return currentState
    }
  }
  return store
}

//thunk()(middlewareApi)(store.dispatch)(action)
function createThunkMiddleware(extraArgs) {
  return ({ dispatch, getState }) => next => action => {
    if(typeof action === 'function') {
      return action(dispatch)
    }
  }
}
const Thunk = createThunkMiddleware()
Thunk.withExtraArgument = createThunkMiddleware

// export action creator
function fetchifNeeded(flag, dispatch, getState) {

}

/*
function logger(store, action) {
  const dispatch = store.dispatch
  console.log('before')
  dispatch(action)
  console.log('after')
}
function thunk(action) {
  const dispatch = store.dispatch
  if(typeof action ==== 'function') {
    action(dispatch)
  }
}


=>

const store = createStore(
  rootReducer,
  applyMiddleware(
    [thunk, logger]
  ))
*/
const applyMiddleware = (...middlewares) => createStore => (reducer, preloadedState, enhancer) => {
  const store = createStore(reducer, preloadedState, enhancer)
  let dispatch = store.dispatch
  let middlewareAPI = {
    getState: store.getStore,
    dispatch: action => dispatch(action)
  }

  let chain = []
  chain = middlewares.map(middleware => middleware(middlewareAPI))
  dispatch = compose(...chain)(store.dispatch)
  return {
    ...store,
    dispatch
  }
}
/*
createStore({
  thunk,
  customApi,
  logger
})
1.logger(dispatch)
2.customApi(logger(dispatch))
3.thunk(customApi(logger(dispatch)))
final:
thunk(customApi(action => console.log()))(action) ->
thunk(action => {
  if
})
*/

// f(g(h))
// function square(n, ...args) (if (args.length) { return n * n + args[0]} return n * n)
// const squareSum = compose2(square, sum)
// squareSum(2, 3)(1)
function compose2(f, g) {
  return (...args) => {
    return (...args2) => f(g(...args),...args2)
  }
}

function repeated(f, n, args) {
  return repeated(f, n - 1, f(args))
}

function applyMiddleware2(...middlewares) {
  return (dispatch, getState) => {
    const funcs = middlewares.map(middleware => middleware(dispatch, getState))
    compose(funcs)
  }
}

function compose(...funcs) {
  if(funcs.length === 1) {
    return funcs[0]
  }
  const last = funcs[funcs.length - 1]
  const rest = funcs.slice(0, -1)
  return (...args) => (rest.reduceRight((composed, f) => f(composed), last(args)))
}


function foo({ m , n }) {
  return {
    x: bar(m, n)

  }
}

function bar() {
  function dealWithFinal() {

  }
  return
}
