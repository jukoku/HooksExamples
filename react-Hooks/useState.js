import React, { useState } from "react";
import "./styles.css";

const useState_ = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decreamentItem = () => setItem(item - 1);
  return (
    <div className="useStateHookAnd">
      <h1>Hello {item}</h1>
      <h2>Start editing to see some magic happen! What?</h2>
      <button onClick={incrementItem}>Increment</button>
      <button onClick={decreamentItem}>Decrement</button>
    </div>
  );
};

class AppUgly extends React.Component {
  state = {
    item: 1
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <h2>Start editing to see some magic happen! What?</h2>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decreamentItem}>Decrement</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: state.item + 1
      };
    });
  };
  decreamentItem = () => {
    this.setState((state) => {
      return {
        item: state.item - 1
      };
    });
  };
}

export default useState_;
