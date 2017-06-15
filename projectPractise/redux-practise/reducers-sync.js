import { createStore } from 'redux'

const SHOW_ALL = 'SHOW_ALL',
      ADD_TODO = 'ADD_TODO',
      TOGGLE_TODO = 'TOGGLE_TODO',
      SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

const initState = {
  visibilityFilter: SHOW_ALL,
  todos: []
}

export function reducer(state = initState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER: {
      return Object.assign({}, state, {
        visibilityFilter: action.filter
      })
    }
    case ADD_TODO: {
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      })
    }
    case TOGGLE_TODO: {
      return state.todos.map((todo, index) => {
        if(index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    }
  }
}

function todos(state = [], action) {
  switch(action.type) {
    case ADD_TODO: {
      return state.concat({
        text: action.text,
        completed: false
      })
    }
    case TOGGLE_TODO: {
      return state.map((todo, index) => {
        if(index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    }
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  if(action.type === SET_VISIBILITY_FILTER) {
    return action.filter
  }

  return state
}

export function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

function combineReducer(reducers) {
  const finalReducers = {},
        reducersKey = Object.keys(reducers)
  for(let i = 0; i < reducersKey.length; i++) {
    const key = reducersKey[i]
    if(typeof(reducers[key]) === 'function') {
      finalReducers[key] = reducers[key]
    }
  }
  const finalReducersKey = Object.keys(finalReducers)

  function assertReducerShape(reducers) {
    const reducersKey = Object.key(reducers)
    for(let i = 0; i < reducersKey.length; i++) {
      const key = reducersKey[i],
            reducer = reducers[key]
      const initState = reducer(undefined, createStore.ActionTypes)

      if(typeof initState === 'undefined') {
        throw new Error(`reducer need an initial state while it received undefined as args`)
      }
    }
  }

  return (state = {}, action) => {
    let hasChanged = false
    const nextState = {}
    for(let i = 0; i < finalReducersKey.length; i++) {
      const key = finalReducersKey[i],
            reducer = finalReducers[key],
            previousStateForKey = state[key],
            nextStateForKey = reducer(previousStateForKey, action)

      if(typeof nextStateForKey === 'undefined') {
        throw new Error()
      }
      nextState[key] = nextStateForKey
//      state[key] ? nextState[key] = state[key](state[key], action) : nextState[key] = finalReducers[key]
      hasChanged = hasChanged || nextState[key] !== previousStateForKey
    }
    return hasChanged ? nextState : state
  }
}

export function todoAppWithCombineReducer() {
  return combineReducer({
    visibilityFilter,
    todos
  })
}
