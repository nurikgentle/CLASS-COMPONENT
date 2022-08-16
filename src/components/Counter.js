import React from "react";

export default class Counter extends React.Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="counter">
        <div>count: {this.state.count}</div>
        <button onClick={this.increment}>кошуу</button>
        <button onClick={this.decrement}>алуу</button>
      </div>
    );
  }
}
