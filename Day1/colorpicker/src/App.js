import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    start: false,
    R: 0,
    G: 0,
    B: 0,
    A: 0.9,
    speed: 2,
    instruction: "Click anywhere to start"
  };

  render() {
    const sleep = seconds => {
      return new Promise(resolve => setTimeout(resolve, seconds * 60));
    };

    document.onclick = async e => {
      if (!this.state.start) {
        this.setState({ start: true, instruction: "Click anywhere to stop." });
        while (this.state.start) {
          this.setState({
            R: Math.random() * 256,
            G: Math.random() * 256,
            B: Math.random() * 256,
            A: Math.random()
          });
          await sleep(this.state.speed);
        }
      } else {
        this.setState({ start: false, instruction: "Click anywhere to start." });
      }
    };
    const sliderChange = () => {
      this.setState({
        speed: document.getElementById("formControlRange").value
      });
    };

    // const innerClicked = event => {
    //   console.log("inner here");
    //   event.stopPropagation();
    // };

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
            "," +
            this.state.A +
            ")"
        }}
      >
        <div id="inforow">
          <div className="container" style={{ paddingTop: "20px" }}>
            {this.state.instruction}
            <br />

            <label htmlFor="formControlRange">Speed:</label>
            <input
              type="range"
              className="form-control-range custRange"
              id="formControlRange"
              min="0"
              max="10"
              step="0.1"
              onChange={sliderChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
