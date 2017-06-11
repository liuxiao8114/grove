import warning from './util/warning'

function bindActionCreator(actionCreator, dispatch) {
  return (...args) => dispatch(actionCreator(args))
}

export default function bindActionCreators(actionCreators, dispatch) {
  if(typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch)
  }

  if(typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error()
  }

  const keys = Object.keys(actionCreators)
  for(let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const actionCreator = actionCreators[key]
    if(typeof actionCreator === 'function') {
      bindActionCreator(actionCreator, dispatch)
    } else {
      warning(`bindActionCreators expected a function actionCreator for key '${key}', instead received type '${typeof actionCreator}'.`)
    }
  }
}
