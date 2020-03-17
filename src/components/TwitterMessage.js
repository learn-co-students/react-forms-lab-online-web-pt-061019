import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: 0,
      tweet: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      tweet: event.target.value,
      characters: event.target.value.length
    })
  }

  // charactersRemaining = () => {
  //   this.props.maxChars - this.state.characters
  //   // console.log(this.props.maxChars)
  //   // console.log()
  // }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleChange(event)} value={this.state.tweet} type="text" name="message" id="message" />
        <p>Characters remaining: {this.props.maxChars - this.state.characters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
