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
  state = { isopenNav: false, strokeSize: 5 };
  // componentDidMount = () => {
  //   // set canvas id to variable
  //   var canvas = document.getElementById("draw");

  //   // get canvas 2D context and set it to the correct size
  //   var ctx = canvas.getContext("2d");
  //   // resize();

  //   // resize canvas when window is resized
  //   function resize() {
  //     console.log(window.innerWidth, window.innerHeight);
  //     ctx.canvas.width = window.innerWidth;
  //     ctx.canvas.height = window.innerHeight;
  //   }

  //   // add event listeners to specify when functions should be triggered

  //   // window.addEventListener("resize", resize);
  //   document.addEventListener("mousemove", draw);
  //   document.addEventListener("mousedown", setPosition);
  //   document.addEventListener("mouseenter", setPosition);

  //   // last known position
  //   var pos = { x: 0, y: 0 };

  //   // new position from mouse events
  //   function setPosition(e) {
  //     var rect = canvas.getBoundingClientRect();
  //     // console.log(rect.left, rect.right);
  //     // console.log(e.clientX - rect.left, e.clientY - rect.right);
  //     pos.x = e.clientX - rect.x;
  //     pos.y = e.clientY - rect.y;
  //     // console.log(pos.x, pos.y);
  //     // pos.x = e.clientX;
  //     // pos.y = e.clientY;
  //   }

  //   function draw(e) {
  //     console.log(pos.x, pos.y);
  //     if (e.buttons !== 1) return; // if mouse is pressed.....
  //     if (e.clientX < 0 || e.clientY < 0) {
  //       console.log("escape if out of canvas");
  //       return; // if mouse is pressed.....
  //     }

  //     ctx.beginPath(); // begin the drawing path

  //     ctx.lineWidth = 5; // width of line
  //     ctx.lineCap = "round"; // rounded end cap
  //     ctx.strokeStyle = "#000000"; // hex color of line

  //     ctx.moveTo(pos.x, pos.y); // from position
  //     s(e);
  //     ctx.lineTo(pos.x, pos.y); // to position

  //     ctx.stroke(); // draw it!
  //   }
  // };

  componentDidMount = () => {
    document.getElementById("formControlRange").value = 5;
    var letsdraw = false;
    var theCanvas = document.getElementById("draw");
    var editorPannel = document.getElementById("editorPannel");
    var ctx = theCanvas.getContext("2d");
    theCanvas.width = editorPannel.getBoundingClientRect().width * 0.93;
    theCanvas.height = editorPannel.getBoundingClientRect().height * 0.95;

    // var canvasOffset = theCanvas.offsetHeight();

    theCanvas.addEventListener("mousemove", function(e) {
      if (letsdraw === true) {
        ctx.lineTo(
          e.pageX - theCanvas.getBoundingClientRect().left,
          e.pageY - theCanvas.getBoundingClientRect().top
        );
        ctx.stroke();
      }
    });

    theCanvas.addEventListener("mousedown", e => {
      // setup all of the properties for your line on mousedown, not mousemove
      letsdraw = true;
      ctx.strokeStyle = "white";
      ctx.lineWidth = this.state.strokeSize;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(
        e.pageX - theCanvas.getBoundingClientRect().left,
        e.pageY - theCanvas.getBoundingClientRect().top
      );
    });

    theCanvas.addEventListener("mouseup", function() {
      // bind to the window mouse up, that way if you mouse up and you're not over
      // the canvas you'll still get the release of the drawing.
      letsdraw = false;
    });

    window.onresize = () => {
      theCanvas.width = editorPannel.getBoundingClientRect().width * 0.93;
      theCanvas.height = editorPannel.getBoundingClientRect().height * 0.95;
    };
  };

  render() {
    const sliderChange = () => {
      this.setState({
        strokeSize: document.getElementById("formControlRange").value
      });
    };

    const toggleNav = () => {
      this.setState({ isopenNav: !this.state.isopenNav });
    };

    return (
      <div id="Root">
        <Navbar
          id="NavBar"
          light
          expand="md"
          style={{ background: "RGBA(0,0,0,1)", color: "RGBA(255,255,255,1)" }}
        >
          <NavbarBrand style={{ color: "RGBA(255,255,255,1)" }}>
            Paint
          </NavbarBrand>
          <NavbarToggler onClick={toggleNav} />
          <Collapse isOpen={this.state.isopenNav} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#" style={{ color: "RGBA(255,255,255,1)" }}>
                  Home
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink
                  href="https://xo28122000.github.io/portfolio/"
                  style={{ color: "RGBA(255,255,255,1)" }}
                >
                  Portfolio
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <div id="body">
          <div id="editorWindow" className="container-fluid">
            <div
              className="row"
              style={{
                height: "100%"
              }}
            >
              <div
                id="optionPannel"
                className="col-2"
                style={{ color: "black" }}
              >
                <div className="container">
                  <div className="row">
                    <label htmlFor="formControlRange">Stroke width:</label>
                    <br />
                    <input
                      type="range"
                      className="form-control-range custRange"
                      id="formControlRange"
                      min="1"
                      max="35"
                      step="1"
                      onChange={sliderChange}
                    />
                  </div>
                </div>
              </div>
              <div
                id="editorPannel"
                className="col-10"
                style={{ justifyContent: "center", alignContent: "center" }}
              >
                <div
                  className="row"
                  style={{
                    justifyContent: "center",
                    alignContent: "center",
                    margin: "12px"
                  }}
                >
                  <div className="col-12">
                    <canvas
                      id="draw"
                      style={{
                        border: "1px solid",
                        borderColor: "#fffff",
                        background: "black"
                      }}
                    ></canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer"></div>
      </div>
    );
  }
}

export default App;
