import Todo from ''
import connect from ''
import toggleTodo from ''
import setVisibilityFilter from ''

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

connect(mapStateToProps, mapDispatchToProps)(TodoList)

const Link = ({ active, children, onClick }) => {
  if(active) {
    return <span>{children}</span>
  }
  return (
    <a href="" onClick={
        e => {
          e.preventDefault()
          onClick()
        }
      }>{children}</a>
  )
}

const FilterLink = connect((state, ownProps) => {
  return {
    active: state.filter === ownProps.filter
  }
}, (dispatch, ownProps)  => {
  return {
    onClick: dispatch(setVisibilityFilter(ownProps.filter))
  }
})(Link)

const Footer = () => {
  return (
    <div>
      <FilterLink filter="ALL"/>
      <FilterLink filter="ACITVE"/>
      <FilterLink filter="COMPLETED"/>
    </div>
  )
}
