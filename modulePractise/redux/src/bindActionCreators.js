function bindActionCreator(actionCreator, dispatch) {
  return (...args) => dispatch(actionCreator(args))
}

export default function bindActionCreators(actionCreators, dispatch) {
  if(typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch)
  }

  if(typeof actionCreators !== 'object') {
    return new Error()
  }

  const keys = Object.keys(actionCreators)
  for(let i = 0; i < keys.length; i++) {
    const key = keys[i]
    bindActionCreator(actionCreators[key], dispatch)
  }
}
