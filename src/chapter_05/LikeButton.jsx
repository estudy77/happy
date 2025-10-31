import React from "react";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  handleClick = () => {
    this.setState({ liked: !this.state.liked });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.liked ? "좋아요 취소" : "좋아요"}
      </button>
    );
  }
}

export default LikeButton;
