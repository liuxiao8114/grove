import Todo from ''
import connect from ''
import toggleTodo from ''

const SHOW_ALL = 'SHOW_ALL',
      COMPLETED = 'COMPLETED',
      ACTIVE = 'ACTIVE'

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {
        todos.map(todo =>
          <Todo key={todo.id} onClick={onTodoClick(todo.id)}/>
        )
      }
    </ul>
  )
}

function getVisibleTodos(todos, visibilityFilter) {
  switch (visibilityFilter) {
    case ACTIVE:
      return todos.filter(todo => !todo.completed)
    case SHOW_ALL:
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => dispatch(toggleTodo(id))
  }
}

connect(mapStateToProps, mapDispatchToProps)
