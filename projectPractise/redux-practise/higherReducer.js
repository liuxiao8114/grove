const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
}

let rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO': {
      return Object.assign({}, state, {
        todos: state.todos.concat({
          id: action.id,
          text: action.text,
          completed: false
        })
      })
    }
    case 'TOGGLE_TODO': {
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if(todo.id !== action.id) {
            return todo
          }
          return Object.assgin({}, todo, {
            completed: !todo.completed
          })
        })
      })
    }
    case 'EDIT_TODO': {
      return Object.assign({}, state, {
        todos: state.todos.map(todo => {
          if(todo.id !== action.id) {
            return todo
          }
          return Object.assgin({}, todo, {
            text: action.text
          })
        })
      })
    }
    case 'SET_VISIBILITY_FILTER': {
      return
    }
    default:
      return state
  }
}

function updateTodoContent(items, itemId, callback) {
  return items.map(item => {
    if(item.id !== itemId) {
      return item
    }
    return callback(item)
  })
}

function createNewObject(preState, newValues) {
  return Object.assign({}, preState, newValues)
}

rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TODO': {
      const newValues = state.todos.concat({
        id: action.id,
        text: action.text,
        completed: false
      })
      return createNewObject(state, newValues)
    }

    case 'TOGGLE_TODO': {
      const newValues = updateTodoContent(state.todos, action.id, todo => createNewObject(todo, { completed: !todo.completed }))
      return createNewObject(state, newValues)
    }

    case 'EDIT_TODO': {
      const newValues = updateTodoContent(state.todos, action.id, todo => createNewObject(todo, { text: action.text }))
      return createNewObject(state, newValues)
    }
    case 'SET_VISIBILITY_FILTER': {
      return
    }
    default:
      return state
  }
}

const addTodo = (state = {}, action) => state.concat({
  id: action.id,
  text: action.text,
  completed: false
})

const toggleTodo = (state = {}, action) => {

}
