import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends Component {
  state = {
    text: "nama kamu di sini"
  };

  callFirstName = callBack => {
    setTimeout(() => {
      callBack("Dimas");
    }, 3000);
  };

  callLastName = cb => {
    setTimeout(() => {
      cb("Yudhistira");
    }, 2000);
  };

  login = () => {
    this.callFirstName(result => {
      const first = result;
      this.callLastName(result2 => {
        const last = result2;
        const name = `${first} ${last}`;
        this.setState({ text: name });
      });
    });
  };

  render() {
    const { text } = this.state;
    const { login } = this;

    return (
      <div>
        <button onClick={login}>Login</button>
        <h2>{text}</h2>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
