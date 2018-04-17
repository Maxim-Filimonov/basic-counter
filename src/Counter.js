import React, { Component, bindAll } from "react";

export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      counter: 0
    };
  }
  onIncrementClick = () => {
    this.setState({ counter: this.state.counter + 10 });
  };
  onDecrementClick = () => {
    this.setState({
      counter: this.state.counter - 5
    });
  };
  onResetClick = () => {
    this.setState({
      counter: 0
    });
  };
  render() {
    const { counter } = this.state;
    return (
      <section className="Counter">
        <h1>Count: {counter}</h1>
        <button onClick={this.onIncrementClick} className="full-width">
          Increment
        </button>
        <button onClick={this.onDecrementClick} className="full-width">
          Decrement
        </button>
        <button onClick={this.onResetClick} className="full-width">
          Reset
        </button>
      </section>
    );
  }
}
