import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { start: false, R: 0, G: 0, B: 0 };

  render() {
    const sleep = seconds => {
      return new Promise(resolve => setTimeout(resolve, seconds * 60));
    };
    document.onclick = async e => {
      if (!this.state.start) {
        this.setState({ start: true });
        while (this.state.start) {
          this.setState({
            R: Math.random() * 256,
            G: Math.random() * 256,
            B: Math.random() * 256
          });

          await sleep(2);
        }
      } else {
        this.setState({ start: false });
      }
    };
    return (
      <div
        id="Root"
        style={{
          backgroundColor:
            "RGBA(" +
            this.state.R +
            "," +
            this.state.G +
            "," +
            this.state.B +
            ",0.8)"
        }}
      >
        <div id="inforow">
          <div className="container" style={{ paddingTop: "20px" }}>
            <h4>
              Click anywhere to start
              <br /> Click again to stop
            </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
