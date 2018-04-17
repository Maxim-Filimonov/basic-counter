import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      counter: 0
    };
  }
  render() {
    return (
      <section className="Counter">
        <h1>Count: {this.state.counter}</h1>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 10 });
          }}
          className="full-width"
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter - 5 });
          }}
          className="full-width"
        >
          Decrement
        </button>
        <button
          onClick={() => {
            this.setState({ counter: 0 });
          }}
          className="full-width"
        >
          Reset
        </button>
      </section>
    );
  }
}
