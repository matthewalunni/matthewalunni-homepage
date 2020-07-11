import React, { Component } from "react";
import {Navbar, Nav} from 'react-bootstrap';



class NavbarPage extends Component {
  
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-auto">
            <Nav.Link id="homeLink" href="#home">Home</Nav.Link>
            <Nav.Link id="aboutLink" href="#about">About</Nav.Link>
            <Nav.Link id="projectLink" href="#projects">Projects</Nav.Link>
            <Nav.Link id="contactLink" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarPage;