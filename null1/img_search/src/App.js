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
  searchClicked = () => {
    fetch("https://random-word-api.herokuapp.com/word?key=YQSQY7EP&number=3")
      .then(res => {
        return res.json();
      })
      .then(words => {
        console.log(words);
      });
    const cheerio = require("cheerio");
    const siteUrl = "https://remoteok.io/";
    const axios = require("axios");
    const fetchData = async () => {
      const result = await axios.get(siteUrl);
      return cheerio.load(result.data);
    };
    console.log(fetchData());
    // fetch("https://www.google.com/search?q=some+image+search")
    //   .then(res => {
    //     // console.log(res.body);
    //     return res.body;
    //   })
    //   .then(body => {
    //     const reader = body.getReader();
    //     console.log(reader);
    //   });
    // .then(words => {
    //   console.log(words);
    // });
    // console.log(bag);
  };
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
            img_search
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
          <div className="container">
            <div id="searchInp" className="row">
              <div className="col-8">
                {/* <ButtonGroup
                  style={{
                    marginLeft: "2%",
                    marginRight: "2%",
                    width: "100%"
                  }}
                >
                  <Button color="info">1</Button>
                  <Button color="warning" style={{ color: "white" }}>
                    2
                  </Button>
                  <Button color="danger">3</Button>
                </ButtonGroup> */}
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>Number of words to mix</InputGroupText>
                  </InputGroupAddon>
                  <Input id="numberinput" placeholder="1,2,3....1000" />
                </InputGroup>
              </div>
              <div className="col-4">
                <Button
                  color="success"
                  style={{
                    marginLeft: "2%",
                    marginRight: "2%",
                    width: "100%"
                  }}
                  onClick={this.searchClicked}
                >
                  Search
                </Button>
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
