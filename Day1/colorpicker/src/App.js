import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { start: false, R: 255, G: 255, B: 255 };

  render() {
    const sleep = seconds => {
      return new Promise(resolve => setTimeout(resolve, seconds * 60));
    };
    document.onclick = async e => {
      if (!this.state.start) {
        var i = 0;
        for (i = 0; i < i + 10; i++) {
          this.setState({
            R: Math.random() * 256,
            G: Math.random() * 256,
            B: Math.random() * 256
          });
          console.log("camehere");
          await sleep(7);
          // setTimeout(() => {}, 50000);
        }

        // var rand3 = Math.random() * 256;
      }
    };
    return (
      <div
        id="Root"
        style={{
          backgroundColor:
            "RGB(" +
            this.state.R +
            "," +
            this.state.G +
            "," +
            this.state.B +
            ")"
        }}
      >
        <div id="inforow">Click anywhere to start</div>
      </div>
    );
  }
}

export default App;
