import React , {useState, useEffect}from "react";
import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.css"

import { Storage } from "aws-amplify";

import "./Navi.scss"
import { Link, useLocation } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function Navi(){


  const [navActive, setNavActive] = useState(null);
  const [Resume, setResume] = useState('');

  const location = useLocation();



  const getResume = async () => {
    const data = await Storage.get('Tech-Resume.pdf', {
      expires: 30
    });
    setResume(data);
  }





  useEffect(() => {
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
                <Nav.Link as={Link} to={"/"} active={navActive === "/"}  >Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}  active={navActive === "/about"} className="nav-item nav-link-ltr">About Me</Nav.Link>
                <Nav.Link as={Link} to={"/skills"} active={navActive === "/skills"} className="nav-item">Skills</Nav.Link>
                <Nav.Link as={Link} to={"/projects"} active={navActive === "/projects"} className="nav-item">Projects</Nav.Link>
                <Nav.Link as={Link} to={"/contact"} active={navActive === "/contact"} className="nav-item">Contact Me</Nav.Link>
                <Nav.Link as={Link} onClick={getResume} to={Resume}  target="_blank" className="nav-item-resume" style={{borderBottomColor: "#1c1c1e"}}>Resume</Nav.Link>
              </Nav>

          </Navbar.Collapse>
            {/* <Navbar.Brand href="#home">Weston Wood</Navbar.Brand> */}

          </Container>
          </Navbar>
      </>


    )

}

export default Navi;
