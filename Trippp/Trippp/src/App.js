import React, { Component } from "react";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class App extends Component {
  state = {
    isopenNav: false,
    start: false,
    R: 0,
    G: 0,
    B: 0,
    A: 0.9,
    speed: 2,
    instruction: "Click anywhere to start"
  };
  sleep = seconds => {
    return new Promise(resolve => setTimeout(resolve, seconds * 60));
  };
  componentDidMount = () => {
    document.getElementById("formControlRange").value = 2;
    document
      .getElementsByClassName("colorChange")[0]
      .addEventListener("click", async e => {
        if (!this.state.start) {
          this.setState({
            start: true,
            instruction: "Click anywhere to stop."
          });
          while (this.state.start) {
            this.setState({
              R: Math.random() * 256,
              G: Math.random() * 256,
              B: Math.random() * 256,
              A: Math.random()
            });
            await this.sleep(this.state.speed);
          }
        } else {
          this.setState({
            start: false,
            instruction: "Click anywhere to start."
          });
        }
      });
  };
  render() {
    document.onclick = async e => {};
    const sliderChange = () => {
      this.setState({
        speed: document.getElementById("formControlRange").value
      });
    };

    // const innerClicked = event => {
    //   console.log("inner here");
    //   event.stopPropagation();
    // };
    const toggleNav = () => {
      this.setState({ isopenNav: !this.state.isopenNav });
    };
    return (
      <div id="Root">
        <div
          className="colorChange"
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
          <div id="NavBar">
            <Navbar
              // color="#ffffff"
              light
              expand="md"
              style={{ background: "RGBA(255,255,255,0.3)" }}
            >
              <NavbarBrand>TRIPPP</NavbarBrand>
              <NavbarToggler onClick={toggleNav} />
              <Collapse isOpen={this.state.isopenNav} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="#">Home</NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink href="https://xo28122000.github.io/portfolio/">
                      Portfolio
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>

          <div id="main"></div>
        </div>
        <div
          id="footer"
          className="row align-items-center"
          style={{ background: "RGBA(255,255,255,0.3)" }}
        >
          <div class="col-4" style={{ textAlign: "center" }}>
            <div className="container-fluid" style={{ paddingTop: "10px" }}>
              {this.state.instruction}
            </div>
          </div>
          <div class="col-8">
            <div className="container-fluid">
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
          <div class="col "></div>
        </div>
      </div>
    );
  }
}

export default App;
