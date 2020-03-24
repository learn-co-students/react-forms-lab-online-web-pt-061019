import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleInput = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    let charRemain = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type='text' name='message' id='message' value={this.state.message}  onChange={(event) => this.handleInput(event)} />
        {charRemain}
      </div>
    );
  }
}

export default TwitterMessage;
