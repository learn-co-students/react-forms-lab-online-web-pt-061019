import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleMessageChange(e) {
    this.setState({
      message: e.target.value 
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" name="message" id="message" 
          onChange = {e => this.handleMessageChange(e)}
          value={this.state.message}/>
          <h2>Characters Remaining: {this.props.maxChars - this.state.message.length}</h2>
      </div>
    );
  }
}

export default TwitterMessage;
