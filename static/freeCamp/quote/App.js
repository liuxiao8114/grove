import React, { ReactDOM } from 'react'

const quotes = [
  {
    'by': 'liu_xiao',
    'content': 'this is a beginning'
  }, {
    'by': 'liu_yuchen',
    'content': 'so it may not be end rightly'
  }, {
    'by': 'liu_xiao',
    'content': 'but you have to know'
  }, {
    'by': 'liu_yuchen',
    'content': 'everyone will have a die'
  }
]

React.createClass({
  componentDidMount() {
    const quote = this.getQuote()
    this.setState({
      content: quote.content,
      by: quote.by
    })
  },

  getQuote() {
    return quotes[Math.floor(Math.random() * quotes.length + 1)]
  },

  handleClick() {
    const quote = this.getQuote()
    this.setState({
      content: quote.content,
      by: quote.by
    })
  },

  openURL(e) {
    window.open('' + e.value)
  },

  render() {
    return (
      <div>
        <Quote content={this.state.content} author={this.state.by}/>
        <Buttons open={this.openURL} click={this.handleClick}/>
      </div>
    )
  }
})

ReactDOM.render(<App/>,document.getElementById('content'))
