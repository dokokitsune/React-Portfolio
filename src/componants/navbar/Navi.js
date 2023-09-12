import React from "react";
import { Container, NavDropdown, Navbar, NavbarBrand } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css"

import "./Navi.scss"

function Navi(){


    return(
      <>
        <Navbar data-bs-theme="dark" expand='lg' sticky="top" className="top-0 end-0">\
          <Container>
            {/* <NavbarBrand href="/">Weston Wood</NavbarBrand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href="/" className="nav-item">Home</Nav.Link>
                {/* <NavDropdown title="About Me" className="nav-item" id="about-dropdown">
                  <NavDropdown.Item href="/about" className="nav-dropdown-text">Summery</NavDropdown.Item>
                  <NavDropdown.Item href="/projects" className="nav-dropdown-text">My Projects</NavDropdown.Item>
                </NavDropdown> */}
                <Nav.Link href="/about" className="nav-item">About Me</Nav.Link>
                <Nav.Link href="/projects" className="nav-item">My Projects</Nav.Link>
                <Nav.Link href="/contact" className="nav-item">Contact Me</Nav.Link>
              </Nav>

          </Navbar.Collapse>
            {/* <Navbar.Brand href="#home">Weston Wood</Navbar.Brand> */}

          </Container>
          </Navbar>
      </>


    )

}

export default Navi;
