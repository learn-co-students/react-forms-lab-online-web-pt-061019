import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleInput =e => {
    this.state({
      message: e.target.value
    })
  }

  render() {
    let charRemain = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message}  onChange={this.handleInput} />
        {charRemain}
      </div>
    );
  }
}

export default TwitterMessage;
