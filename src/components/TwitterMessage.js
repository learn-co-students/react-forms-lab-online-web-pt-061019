import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

handleMessageChange(event){
  this.setState({
    message: event.target.value
  })
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message"
        onChange = {event => this.handleMessageChange(event)}
        value={this.state.message}
         />
         <h4>Characters Left: {this.props.maxChars - this.state.message.length}</h4>
      </div>

    );
  }
}

export default TwitterMessage;
