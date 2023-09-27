import React from "react";
import ReactTyped from "react-typed";

import "./home.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faGithubSquare } from "@fortawesome/free-brands-svg-icons";




function Home() {

  return(


    <>
    <div className="container">

      <h1>
        <ReactTyped className = "typeWriter position-absolute top-50 start-50 translate-middle"
          strings={["Weston Wood", "ACM Web Leader", "CSULA Junior"]}
          typeSpeed={100}
          loop
          backSpeed={20}
          cursorChar="|"
          showCursor={true}

          / >
      </h1>
        <div className="icons position-absolute top-50 start-50 translate-middle">

          <FontAwesomeIcon className="iconElement" id="linkedin" href="https://www.linkedin.com/in/weston-wood9802/" icon={faLinkedin} style={{color: "white",}} size="2xl"/>
          <FontAwesomeIcon className="iconElement" id="github" href="https://github.com/dokokitsune" icon={faGithubSquare} style={{color: "white",}} size="2xl" />
        </div>

      </div>




    </>



  )

}


export default Home;
