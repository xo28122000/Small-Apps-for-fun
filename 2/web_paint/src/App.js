import React, { Component } from "react";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  ButtonGroup,
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from "reactstrap";
class App extends Component {
  state = { isopenNav: false };

  render() {
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
            Web Paint
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
          <div
            className="container-fluid"
            style={{
              height: "100%",
              width: "100%"
            }}
          >
            <div
              className="row"
              style={{
                height: "100%"
              }}
            >
              <div
                className="col-2"
                style={{
                  backgroundColor: "white"
                }}
              ></div>
              <div className="col-10" style={{ backgroundColor: "gray" }}></div>
            </div>
          </div>
        </div>
        <div id="footer"></div>
      </div>
    );
  }
}

export default App;
