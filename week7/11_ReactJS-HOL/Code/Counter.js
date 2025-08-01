import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  increment = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  sayHello = () => {
    console.log("Hello! Static message from sayHello method.");
  }

  handleClick() {
    this.increment();
    this.sayHello();
  }

  decrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  sayWelcome = (msg) => {
    alert(`Welcome Message: ${msg}`);
  }

  handleSyntheticEvent = (event) => {
    alert("I was clicked");
    console.log(event); // SyntheticEvent
  }

  render() {
    return (
      <div style={{ marginBottom: '30px' }}>
        <h2>Counter Example</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome to React Event Handling!")}>Say Welcome</button>
        <br /><br />
        <button onClick={this.handleSyntheticEvent}>Synthetic Event (onClick)</button>
      </div>
    );
  }
}

export default Counter;
