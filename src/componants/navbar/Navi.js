import React from "react";
import { Container, NavDropdown, Navbar, NavbarBrand } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

import "./Navi.scss"

function Navi(){


    return(
      <>
        <Navbar variant="dark" expand='lg' fixed="top">\
          <Container>
            <NavbarBrand href="/">Weston Wood</NavbarBrand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="About Me" id="about-dropdown">
                  <NavDropdown.Item href="/about">Summery</NavDropdown.Item>
                  <NavDropdown.Item href="/projects">My Projects</NavDropdown.Item>
                </NavDropdown>
                {/* <Nav.Link href="/about">About Me</Nav.Link>
                <Nav.Link href="/projects">My Projects</Nav.Link> */}
                <Nav.Link href="/contact">Contact Me</Nav.Link>
              </Nav>

          </Navbar.Collapse>
            {/* <Navbar.Brand href="#home">Weston Wood</Navbar.Brand> */}

          </Container>
          </Navbar>
      </>


    )

}

export default Navi;
