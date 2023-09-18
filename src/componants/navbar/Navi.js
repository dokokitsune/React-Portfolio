import React from "react";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css"

import "./Navi.scss"
import { NavLink, useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function Navi(){


  const [navActive, setNavActive] = React.useState(null);

  const location = useLocation();

  React.useEffect(() => {
    setNavActive(location.pathname);

  }  ,[location]);

    return(
      <>
        <Navbar data-bs-theme="dark" expand='lg' sticky="top" className="top-0 start-0" >
          <Container fluid>
            {/* <NavbarBrand href="/">Weston Wood</NavbarBrand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto" variant="underline">
            
              <Nav.Link href="/" active={navActive === "/"}  >Home</Nav.Link>
                {/* <NavDropdown title="About Me" className="nav-item" id="about-dropdown">style={({isActive}) => (isActive ? (color: '#029cd7') : (color: 'white'))}
                  <NavDropdown.Item href="/about" className="nav-dropdown-text">Summery</NavDropdown.Item>
                  <NavDropdown.Item href="/projects" className="nav-dropdown-text">My Projects</NavDropdown.Item>#029cd7;
                </NavDropdown> */}
                <Nav.Link href="/about" active={navActive === "/about"} className="nav-item">About Me</Nav.Link>
                <Nav.Link href="/skills" active={navActive === "/skills"} className="nav-item">Skills</Nav.Link>
                <Nav.Link href="/projects" active={navActive === "/projects"} className="nav-item">Projects</Nav.Link>
                <Nav.Link href="/contact" active={navActive === "/contact"} className="nav-item">Contact Me</Nav.Link>
                <Nav.Link href="/resume" active={navActive === "/resume"} className="nav-item">Resume</Nav.Link>
              </Nav>

          </Navbar.Collapse>
            {/* <Navbar.Brand href="#home">Weston Wood</Navbar.Brand> */}

          </Container>
          </Navbar>
      </>


    )

}

export default Navi;
