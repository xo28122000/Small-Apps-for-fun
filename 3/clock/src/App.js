import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {};
  render() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const start = Date.now();
    return (
      <div className="App">
        {date}
        {"   "}
        {time}

        <div className="circle"></div>
      </div>
    );
  }
}
export default App;
