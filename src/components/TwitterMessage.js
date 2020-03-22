import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleEvent = (event) => {
    this.setState({
      message: event.target.value
    })
    // event.preventDefault()
    // console.log("Typing...")
    // console.log(event.target.value.length) // poodle = 6
    // this.setState({
    //   maxChars: event.target.value.count
    // }))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleEvent} value={this.state.message} />
        <strong>Characters remaining:</strong> {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
