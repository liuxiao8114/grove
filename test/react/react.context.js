import React from 'react';

/*
class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}<Button color={this.props.color}>Delete</Button>
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button style={{background: this.props.color}}>
        {this.props.chilren}
      </button>
    )
  }
}

class MessageList extends React.Component {

  render(){
    const color = "purple";
    const children = this.props.messages.map(message => {
      <Message text={message.text} color={color} />
    });
    return (
      <div>{children}</div>
    )
  }
}
*/

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}<Button>Delete</Button>
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button style={{background: this.context.color}}>
        {this.props.chilren}
      </button>
    )
  }
}

Button.contextTypes = {
  color: React.PropTypes.string
};

class MessageList extends React.Component {
  getChildContext() {
    return {
      color: "purple"
    };
  }

  render(){
    const children = this.props.messages.map(message => {
      <Message text={message.text}/>
    });
    return (
      <div>{children}</div>
    )
  }
}

MessageList.childContextTypes = {
  color: React.PropTypes.string
}
