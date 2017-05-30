import { combineReducer } from 'redux'

const SHOW_ALL = 'SHOW_ALL',
      ADD_TODO = 'ADD_TODO',
      TOGGLE_TODO = 'TOGGLE_TODO'

const initState = {
  visibilityFilter: SHOW_ALL,
  todos: []
}

export function reducer(state = initState, action) {
  switch (action.type) {
    case 'setVisibilityFilter': {
      return Object.assign({}, state, {
        visibilityFilter: action.visibilityFilter
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

}

function visibilityFilter(state = {}, action) {

}

export function todoApp(state = {}, action) {
  return {
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
    todos: todos(state.todos, action)
  }
}

export function todoAppWithCombineReducer() {
  return combineReducer({
    visibilityFilter,
    todos
  })
}
