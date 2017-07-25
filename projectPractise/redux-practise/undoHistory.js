const updateHistory = (state = {
  past: [],
  present: null,
  future: []
}, action) => {
  const { past, present, future } = state
  switch(action.type) {
    case 'UNDO': {
      if(past.length === 0) {
        throw new Error('can\'t undo when no past')
      }

      return {
        past: past.slice(0, -1),
        present: past[past.length - 1],
        future: present ? future.concat(present) : future
      }
    }

    case 'REDO': {
      if(future.length === 0) {
        throw new Error('cannot redo when no future data')
      }
      return {
        past: present ? past.concat(present) : past,
        present: future[0],
        future: future.slice(1)
      }
    }
    default: {
      return {
        past: present ? past.concat(present) : past,
        present: action.content,
        future: []
      }
    }
  }
}

const doNothingEnhancer = reducer => (state, action) => {
  return reducer(state, action)
}

const combineReducers = reducers => (state = {}, action) => {
  return Object.keys(reducers).reduce((nextState, key) => {
    return nextState
  }, {})
}

const undoable = reducer => {
  const initState = {
    past: [],
    present: reducer(undefined, {}),
    future: []
  }

  return (state = initState, action) => {
    updateHistory(state, action)
  }
}
