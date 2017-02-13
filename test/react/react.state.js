import { ReactDOM, Component } from 'react'

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleDateString()}</h2>
    </div>
  )
}

function tick() {
  ReactDOM.render(<Clock date={new Date()} />)
}

class ClockImprove extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleDateString()}</h2>
      </div>
    )
  }
}

ReactDOM.render(
  <Clock/>,
  document.getElementById('root')
)
