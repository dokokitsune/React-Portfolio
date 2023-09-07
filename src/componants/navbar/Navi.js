import React from "react";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar"
import "./Navi.scss"

function navber(){


    return(
      <>
        <Navbar variant="dark" expand='lg' fixed="top">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Container>
            {/* <Navbar.Brand href="#home">Weston Wood</Navbar.Brand> */}
              <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/about">About Me</Nav.Link>
                <Nav.Link href="/projects">My Projects</Nav.Link>
                <Nav.Link href="/contact">Contact Me</Nav.Link>
              </Nav>
            
          </Container>
          </Navbar>
      </>
    

    )

}

export default navber;