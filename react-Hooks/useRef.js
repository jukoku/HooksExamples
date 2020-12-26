import React, { useRef } from "react";
import "./styles.css";

const App = () => {
  const input = useRef();
  setTimeout(() => input.current.focus(), 5000);
  return (
    <div className="App">
      <div>Hi!!</div>
      <input ref={input} placeholder="la" />
    </div>
  );
};

export default App;
