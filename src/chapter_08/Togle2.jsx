import React from "react";

function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = React.useState(true);

  // 방법 1 : 함수안에 함수로 정의
  function handleClick() {
     setIsToggleOn((isToggleOn) => !isToggleOn);
  };

  // 방법2 : arrow function을 사용하여 정의
  const handleClick = () => {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  };

  return (
    <button onClick={handleClick}>
      {isToggleOn ? "ON" : "OFF"}
    </button>;
  };
}

/*class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}
*/
export default Toggle;
